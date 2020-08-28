echo "Waiting for sleeper..."
while read i; do if [ "$i" = sleep.txt ]; then break; fi; done \
   < <(inotifywait  -e create,open --format '%f' --quiet /tmp --monitor)
echo "...Found sleeper"