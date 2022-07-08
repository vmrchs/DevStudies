#include <cs50.h>
#include <stdio.h>
#include <string.h>
#include <math.h>
#include <ctype.h>

// After we include the libraries we need, we start declaring the functions we want to use.
long getLetters(string text);
long getWords(string text);
long getSentences(string text);
int getGradeLevel(int letters, int sentences, int words);
void printGradeLevel(int gradeLevel);

// Let's make the whole thing more readable by creating modules.
// Here is where we create the logical sequence of the program by organizing the functions.
int main(void)
{
    // Get string from user
    string text = get_string("Text: ");

    // Run the functions
    long letters = getLetters(text);
    long words = getWords(text);
    long sentences = getSentences(text);

    // Run the calculation
    int gradeLevel = getGradeLevel(letters, sentences, words);

    printGradeLevel(gradeLevel);
}

//Now, let's start figuring out the functions.
long getLetters(string text)
{
    // First we need a counter for the letters, let's start it at zero.
    long letters = 0;
    // As usual by now, we start iterating through the text we got from the user. In C we can use the strlen function from the <string.h> library.
    for (long i = 0; i < strlen(text); i++)
    {
        // But make sure to only count letters by using the isalpha function from the <cs50.h> library.
        if(isalpha(text[i]))
        {
            letters++;
        }
    }
    return letters;
}

// Now we apply almost the same logic to count the words.
long getWords(string text)
{
    // We start words at one, as the iteration will not count the first word.
    long words = 1;
    for (int i = 0; i < strlen(text); i++)
    {
        // Here we'll count the number of spaces in the text, as they indicate the separation between two words.
        if (text[i] == ' ')
        {
            words++;
        }
    }
    return words;
}

// Finally the last int we need to figure out is the number of sentences.
long getSentences(string text)
{
    int sentences = 0;
    for (int i = 0; i < strlen(text); i++)
    {
        // What marks the ending of a sentence and the begining of a new one? Punctiation, of course. So let's add one to the counter each time our iteration goes through a period, exclamation or interrogation mark.
        if (text[i] == '.' || text[i] == '!' || text[i] == '?')
        {
            sentences++;
        }
    }
    return sentences;
}

int getGradeLevel(int letters, int sentences, int words)
{
    float L = 0.0588 * (float) letters / words * 100;
    float S = 0.296 * (float) sentences / words * 100;
    float index = L - S - 15.8;
    int grade = round(index);

    return grade;
}

void printGradeLevel(int gradeLevel)
{
    if (gradeLevel <= 1)
    {
        printf("Before Grade 1\n");
    }
    else if (gradeLevel >= 16)
    {
        printf("Grade 16+\n");
    }
    else
    {
        printf("Grade %i\n", gradeLevel);
    }
}