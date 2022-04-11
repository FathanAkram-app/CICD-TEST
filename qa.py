import os

f = open("qa-comments.txt","r")
lines = f.readlines()

for i,line in enumerate(lines):
    if i == 0 and "Yes" in line.split(":")[1]:
        os.system("")
        print("YES")
        break
    else:
        print("NO")