# pyptime
wab based prayer times screen on Raspberry PI



## Putting epiphany-browser on fullscreen

First install epiphany, x11 utils and unclutter (to hide the mouse):
> sudo apt-get install epiphany-browser x11-xserver-utils xautomation unclutter

Create a script file:
> vi /home/pi/fullscreen.sh

Populate the file with:
> sudo -u pi epiphany-browser -a -i --profile ~/.config [URL] --display=:0 &
> sleep 15s;
> xte "key F11" -x:0

Set file permissions
> chmod 755 /home/pi/fullscreen.sh

Modify the autostart file:
> vi ~/.config/lxsession/LXDE-pi/autostart
With:
> @xset s off
> @xset -dpms
> @xset s noblank
> @/home/pi/fullscreen.sh

Refresh the page every (hour ?):
> crontab -e
> 0 */1 * * * xte -x :0 "key F5"
