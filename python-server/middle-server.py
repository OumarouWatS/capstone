import asyncio
from bleak import BleakScanner

async def main():
    devices = await BleakScanner.discover()
    for d in devices:
        print(d)

asyncio.run(main())

import asyncio
from bleak import BleakClient

address = "1022467B-4665-ADC0-222A-0534BA29F9B7"
MODEL_NBR_UUID = "6E400001-B5A3-F393-E0A9-E50E24DCCA9E"

async def main(address):
    async with BleakClient(address) as client:
        model_number = await client.read_gatt_char(MODEL_NBR_UUID)
        print("Model Number: {0}".format("".join(map(chr, model_number))))

asyncio.run(main(address))

# ```import gatt

# class AnyDeviceManager(gatt.DeviceManager):
#     def device_discovered(self, device):
#         print("Discovered [%s] %s" % (device.mac_address, device.alias()))

# manager = AnyDeviceManager()
# manager.start_discovery()
# manager.run()

# class AnyDevice(gatt.Device):

#     def connect_succeeded(self):
#         super().connect_succeeded()
#         print("[%s] Connected" % (self.mac_address))

#     def connect_failed(self, error):
#         super().connect_failed(error)
#         print("[%s] Connection failed: %s" % (self.mac_address, str(error)))

#     def disconnect_succeeded(self):
#         super().disconnect_succeeded()
#         print("[%s] Disconnected" % (self.mac_address))

#     def services_resolved(self):
#         super().services_resolved()

#         print("[%s] Resolved services" % (self.mac_address))
#         for service in self.services:
#             print("[%s]  Service [%s]" % (self.mac_address, service.uuid))
#             for characteristic in service.characteristics:
#                 print("[%s]    Characteristic [%s]" % (self.mac_address, characteristic.uuid))


# device = AnyDevice(mac_address='DC:A6:32:81:19:14', manager=manager)
# device.connect()

# manager.run()

