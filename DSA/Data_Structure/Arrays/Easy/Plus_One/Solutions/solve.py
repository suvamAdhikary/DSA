def plusOne(digits):
    return list(map(int, list(str(int(''.join(map(str, digits))) + 1))))
    
def main():
    print(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))

main()