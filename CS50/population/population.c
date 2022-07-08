#include <cs50.h>
#include <stdio.h>

int start;
int end;
int year = 0;

int main(void)
{
    // TODO: Prompt for start size
    do
    {
        start = get_int("Starting population: ");
    }
    while (start < 9);
    // TODO: Prompt for end size
    do
    {
        end = get_int("Desired population: ");
    }
    while (end <= start);
    // TODO: Calculate number of years until we reach threshold
    do
    {
        start = start + (start / 3) - (start / 4);
        year++;
    }
    while (start < end);
    // TODO: Print number of years
    printf("Years: %i\n", year);
}
