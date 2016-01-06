#!/bin/bash   

# Assumes single phone
# Turn on mobile data in case it was off
adb shell "svc data enable"
# Turn on USB tethering [5.0.1_r1, r6.0.1_r3]
adb shell "service call connectivity 30 i32 1"

# get laptop wifi device
CURRENT_DEVICE=$(networksetup -listallhardwareports | awk '$3=="Wi-Fi" {getline; print $2}')
# turn off wifi
networksetup -setairportpower $CURRENT_DEVICE off
