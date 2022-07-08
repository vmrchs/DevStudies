#include <cs50.h>
#include <stdio.h>
#include <string.h>
#include <ctype.h>
#include <stdlib.h>

int main(int argc, string argv[])
{
    // First we demand that the key be inserted into the command line
    if (argc !=2)
    {
        printf("Usage: ./caesar key\n");
        return 1;
    }
    // And make sure it is an int
    for (int k = 0; k < strlen(argv[1]); k++)
    {
        if (isalpha(argv[1][k]))
        {
            printf("Usage: ./caesar key\n");
            return 1;
        }
    }
    // We convert the key from string to int
    int k = atoi(argv[1]) % 26; // if k is > 26, store the division remainder
    string plaintext = get_string("plaintext: ");

    printf("ciphertext: ");

    // For each character in the plaintext string
    for (int i = 0; i < strlen(plaintext); i++)
    {
        // Print as is if is not alphabetical
        if (!isalpha(plaintext[i]))
        {
            printf("%c", plaintext[i]);
            continue;
        }

        int asciiOffset = isupper(plaintext[i]) ? 65 : 97;

        int pi = plaintext[i] - asciiOffset;
        int ci = (pi + k) % 26;

        printf("%c", ci + asciiOffset);
    }

    printf("\n");
    return 0;
}