#include <cs50.h>
#include <stdio.h>

int main(void)
{
    long long creditCardNumber;

    do
    {
        creditCardNumber = get_long_long("Please input CC Number: \n");
    }
    while (creditCardNumber <= 0);

    long long workingCC = creditCardNumber;
    int sum = 0;
    int count = 0;
    long divisor = 10;

    //1st Case
    while (workingCC > 0)
    {
        int lastDigit = workingCC % 10;
        sum = sum + lastDigit;
        workingCC = workingCC / 100;
    }

    //2nd Case
    workingCC = creditCardNumber / 10;
    while (workingCC > 0)
    {
        int lastDigit = workingCC % 10;
        int timesTwo = lastDigit * 2;
        sum = sum + (timesTwo % 10) + (timesTwo / 10);
        workingCC = workingCC / 100;
    }

    //Count the digits in the CC number
    workingCC = creditCardNumber;
    while(workingCC != 0)
    {
        workingCC = workingCC / 10;
        count++;
    }

    //Check the flag in the  first 2 digits
    for (int i = 0; i < count - 2; i++)
    {
        divisor  = divisor * 10;
    }

    int firstDigit = creditCardNumber / divisor;
    int firstTwoDigits = creditCardNumber / (divisor / 10);

    //Final checks
    if (sum % 10 == 0)
    {
        if (firstDigit == 4 && (count == 13 || count == 16))
        {
            printf("VISA\n");
        }
        else if ((firstTwoDigits == 34 || firstTwoDigits == 37) && count == 15)
        {
            printf("AMEX\n");
        }
        else if ((firstTwoDigits >= 51 && firstTwoDigits < 56) && count == 16)
        {
            printf("MASTERCARD\n");
        }
        else
        {
            printf("INVALID\n");
        }
    }
    else
        {
            printf("INVALID\n");
        }
}