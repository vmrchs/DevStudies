#include <ctype.h>
#include <cs50.h>
#include <stdio.h>
#include <string.h>

// Points assigned to each letter of the alphabet
int POINTS[] = {1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10};

int compute_score(string word);

int main(void)
{
    // Get input words from both players
    string word1 = get_string("Player 1: ");
    string word2 = get_string("Player 2: ");

    // Score both words
    int score1 = compute_score(word1);
    int score2 = compute_score(word2);

    if (score1 > score2)
    {
    printf("Player 1 wins!\n");
    }
    else if (score2 > score1)
    {
        printf("Player2 wins!\n");
    }
    else
    {
        printf("Tie!\n");
    }
}

int compute_score(string word)
{
    //Create an int to store points, start it with zero
    int sumPoints = 0;
    //Here is how we set up to navigate through each lettter in the word as an array
    for (int i = 0; i < strlen(word); i++)
    {
        //Now we make sure to treat the string input as an array, and based on the ASCII values we subtract each letter from A after forcing them to upper case, the difference equals to the position of the letter in the POINTS array
        int letterOffset = toupper(word[i]) - 'A';
        //Then we add each value to the stored points
        sumPoints += POINTS[letterOffset];
    }
    //And finally return it
    return sumPoints;
}
