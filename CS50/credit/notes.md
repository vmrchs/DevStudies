# CS50 - Problem Set 1 - Credit

American Express' Credit Cards start with 34 OR 37 and have 15-digit numbers;
MasterCard's Credit Cards start with 51, 52, 53, 54 OR 55 and have 16-digit numbers;
Visa's Credit Cards start with 4 and have 15-digit OR 16-digit numbers;

4999991111111113

To get the last digit we can use modulo:
4999991111111113 % 10 = 3

To move to the second next digit we can divide by 100, because we're using integers
4999991111111113 / 100 = 49999911111111


## 1st Case:
    1. Iterate through the CC number
    2. Use modulo to get the last digit
    3. Add last digit to sum
    4. Divide the CC number by 100
    5. Repeat

## 2nd Case:
    1. Divide the CC number by 10
    2. Iterate through the CC number
    3. Use modulo to get the last digit
    4. Add last digit multiplied bu 2 to the sum
        4.1 Use modulo for the last digit
        4.2 Use division for the 1st digit
    5. Divide the CC number by 100
    6. Repeat