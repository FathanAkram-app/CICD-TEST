import os

f = open("qa-comments.txt","r")
lines = f.readlines()

for i,line in enumerate(lines):
    if i == 0 and "YES" in line.split(":")[1].upper():
        os.system("")
        print("YES")
        break
    else:
        print("NO")