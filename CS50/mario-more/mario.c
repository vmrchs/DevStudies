#include <cs50.h>
#include <stdio.h>

int main(void)
{
    int height, row, column, space;
    do
    {
        height  = get_int("How tall is the pyramid? ");
    }
    while (height > 8 || height < 1);
//THE IDEA HERE IS TO PRINT ONE LINE AT A TIME
    for (row = 0; row < height; row++)
    {
        //ADD SPACES TO ALIGM FIRST PYRAMID TO THE LEFT
        for (space = 0; space < height - row - 1; space++)
        {
            printf(" ");
        }
        //PRINT LEFT ALIGNED PYRAMID
        for (column = 0; column <= row; column++)
        {
            printf("#");
        }
        //ADD 2 SPACES BETWEEN PYRAMIDS
        printf("  ");
        //PRINT RIGHT ALIGNED PYRAMID
        for (column = 0; column <= row; column++)
        {
            printf("#");
        }
        printf("\n");
    }
}