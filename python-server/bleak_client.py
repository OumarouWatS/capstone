import asyncio
from bleak import BleakScanner
from bleak.backends.characteristic import BleakGATTCharacteristic
import time
from itertools import count, takewhile
from typing import Iterator
import sys

async def main():
    devices = await BleakScanner.discover()
    for d in devices:
        print(d)

asyncio.run(main())

import asyncio
from bleak import BleakClient

#address = "D711732A-3760-54E8-F046-6F6438C61AFC"
address = "1022467B-4665-ADC0-222A-0534BA29F9B7"
#address = "DC:A6:32:81:19:14"
UART_SERVICE_UUID = "6E400001-B5A3-F393-E0A9-E50E24DCCA9E"
UART_RX_CHAR_UUID = "6E400002-B5A3-F393-E0A9-E50E24DCCA9E"
UART_TX_CHAR_UUID = "6E400003-B5A3-F393-E0A9-E50E24DCCA9E"

READ_CHAR = "2A6E"


# TIP: you can get this function and more from the ``more-itertools`` package.
def sliced(data: bytes, n: int) -> Iterator[bytes]:
    """
    Slices *data* into chunks of size *n*. The last slice may be smaller than
    *n*.
    """
    return takewhile(len, (data[i : i + n] for i in count(0, n)))

async def main(address):
    def handle_rx(_: BleakGATTCharacteristic, data: bytearray):
        print("received:", data)

    async with BleakClient(address) as client:
        if client.is_connected:
            print(f"Connected to {address}")
        else:
            print(f"Failed to connect to {address}")
        time.sleep(5)

        await client.start_notify(READ_CHAR, handle_rx)

        print("Connected, start typing and press ENTER...")

        loop = asyncio.get_running_loop()
        nus = client.services.get_service(UART_SERVICE_UUID)
        rx_char = nus.get_characteristic(UART_RX_CHAR_UUID)

        from_pi = await client.read_gatt_char(READ_CHAR)
        print("Data from pi: " + str(from_pi))


        while True:

            # This waits until you type a line and press ENTER.
            # A real terminal program might put stdin in raw mode so that things
            # like CTRL+C get passed to the remote device.
            data = await loop.run_in_executor(None, sys.stdin.buffer.readline)

            # data will be empty on EOF (e.g. CTRL+D on *nix)
            if not data:
                break

            # some devices, like devices running MicroPython, expect Windows
            # line endings (uncomment line below if needed)
            # data = data.replace(b"\n", b"\r\n")

            # Writing without response requires that the data can fit in a
            # single BLE packet. We can use the max_write_without_response_size
            # property to split the data into chunks that will fit.

            for s in sliced(data, rx_char.max_write_without_response_size):
                await client.write_gatt_char(rx_char, s, response=False)

            print("sent:", data)

asyncio.run(main(address))
