#include <cs50.h>
#include <stdio.h>
#include <string.h>
#include <ctype.h>
#include <stdbool.h>

int main(int argc, string argv[])
{
    // Begin checking if the command has ONE key with 26 characters
    if (argc == 2 && strlen(argv[1]) == 26)
    {
        bool valid = false;
        // We set i to iterate through the array
        for (int i = 0; i < strlen(argv[1]); i++)
        {
            // And set j to iterate through as well
            for (int j = i + 1; j < strlen(argv[1]) + 1; j++)
            {
                // We force both i and j characters to lower case and compare them both
                if (isalpha(argv[1][i]) && tolower(argv[1][i]) != tolower(argv[1][j]))
                {
                    valid = true;
                }
                // If there's a duplicate in the key, it returns an error
                else
                {
                    printf("Usage ./substitution key\n");
                    return 1;
                }
            }
        }
        // Now we get the plaintext from the user
        string input = get_string("Plaintext: ");
        // and start iterating through it
        for (int i = 0; i < strlen(input); i++)
        {
            // If it is a lower case character
            if (islower(input[i]))
            {
                // We force both key and plaintext to lower case, the look up the current plaintext character in the key array, and substitute it
                input[i] = tolower(argv[1][input[i] - 97]); // 97 is the ASCII code for lower a
            }
            // Else, if it is upper case
            else if (isupper(input[i]))
            {
                // We do the same proccess but force them characters upper case
                input[i] = toupper(argv[1][input[i] - 65]); // 65 is the ASCII code for upper A
            }
        }
        // And finally we print the cipher
        printf("Ciphertext: %s\n", input);
        return 0;
    }
    // If the keys has more or less than 26 characters, or the command has less or more than 2 arguments, it returns an error
    else
    {
        printf("Usage ./substitution key\n");
        return 1;
    }
}