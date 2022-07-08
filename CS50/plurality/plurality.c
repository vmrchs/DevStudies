#include <cs50.h>
#include <stdio.h>
#include <string.h>

// Max number of candidates
#define MAX 9

// Candidates have name and vote count
typedef struct
{
    string name;
    int votes;
}
candidate;

// Array of candidates
candidate candidates[MAX];

// Number of candidates
int candidate_count;

// Function prototypes
bool vote(string name);
void print_winner(void);

int main(int argc, string argv[])
{
    // Check for invalid usage
    if (argc < 3)
    {
        printf("Usage: plurality [candidate ...]\n");
        return 1;
    }

    // Populate array of candidates
    candidate_count = argc - 1;
    if (candidate_count > MAX)
    {
        printf("Maximum number of candidates is %i\n", MAX);
        return 2;
    }
    for (int i = 0; i < candidate_count; i++)
    {
        candidates[i].name = argv[i + 1];
        candidates[i].votes = 0;
    }

    // Get number of voters
    int voter_count = get_int("Number of voters: ");

    // Loop over all voters
    for (int i = 0; i < voter_count; i++)
    {
        string name = get_string("Vote: ");

        // Check for invalid vote
        if (!vote(name))
        {
            printf("Invalid vote.\n");
        }
    }

    // Display winner of election
    print_winner();
}

// Update vote totals given a new vote
bool vote(string name)
{
    for (int i = 0; i < candidate_count; i++)
    {
        // We have names sotred in the  array, which we can access, and we get a variable name from the user prompt.
        // Here we compare both, and add a count to whicever candidate in the array has the same name as the one inputed by the user.
        if (strcmp(candidates[i].name, name) == 0)
        {
            candidates[i].votes++;
            return true;
        }
    }
    return false;
}

// Print the winner (or winners) of the election
void print_winner(void)
{
    // We create a variable which is gonna store the most votes.
    int most_votes = 0;
    // And start iterating through the array.
    for (int i = 0; i < candidate_count; i++)
    {
        // We got through the whole array, and substitute the most_votes variable every time candidate[i] has more votes than the previous one.
        if(candidates[i].votes > most_votes)
        {
            most_votes = candidates[i].votes;
        }
    }
    // Then we iterate a second time.
    for (int i = 0; i < candidate_count; i++)
    {
        // This time we compare most_votes to every candidates[i].votes, but this time looking for matches.
        if(candidates[i].votes == most_votes)
        {
            // Once we find one or more matches, we print their names.
            printf("%s\n", candidates[i].name);
        }
    }
    return;
}