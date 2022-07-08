#include <cs50.h>
#include <stdio.h>
#include <stdbool.h>
#include <string.h>

// Max voters and candidates
#define MAX_VOTERS 100
#define MAX_CANDIDATES 9

// preferences[i][j] is jth preference for voter i
int preferences[MAX_VOTERS][MAX_CANDIDATES];

// Candidates have name, vote count, eliminated status
typedef struct
{
    string name;
    int votes;
    bool eliminated;
}
candidate;

// Array of candidates
candidate candidates[MAX_CANDIDATES];

// Numbers of voters and candidates
int voter_count;
int candidate_count;

// Function prototypes
bool vote(int voter, int rank, string name);
void tabulate(void);
bool print_winner(void);
int find_min(void);
bool is_tie(int min);
void eliminate(int min);

int main(int argc, string argv[])
{
    // Check for invalid usage
    if (argc < 2)
    {
        printf("Usage: runoff [candidate ...]\n");
        return 1;
    }

    // Populate array of candidates
    candidate_count = argc - 1; // minus one because the first argument is the program itself.
    if (candidate_count > MAX_CANDIDATES)
    {
        printf("Maximum number of candidates is %i\n", MAX_CANDIDATES);
        return 2;
    }
    for (int i = 0; i < candidate_count; i++)
    {
        candidates[i].name = argv[i + 1];
        candidates[i].votes = 0;
        candidates[i].eliminated = false;
    }

    voter_count = get_int("Number of voters: ");
    if (voter_count > MAX_VOTERS)
    {
        printf("Maximum number of voters is %i\n", MAX_VOTERS);
        return 3;
    }

    // Keep querying for votes
    for (int i = 0; i < voter_count; i++)
    {

        // Query for each rank
        for (int j = 0; j < candidate_count; j++)
        {
            string name = get_string("Rank %i: ", j + 1);

            // Record vote, unless it's invalid
            if (!vote(i, j, name))
            {
                printf("Invalid vote.\n");
                return 4;
            }
        }

        printf("\n");
    }

    // Keep holding runoffs until winner exists
    while (true)
    {
        // Calculate votes given remaining candidates
        tabulate();

        // Check if election has been won
        bool won = print_winner();
        if (won)
        {
            break;
        }

        // Eliminate last-place candidates
        int min = find_min();
        bool tie = is_tie(min);

        // If tie, everyone wins
        if (tie)
        {
            for (int i = 0; i < candidate_count; i++)
            {
                if (!candidates[i].eliminated)
                {
                    printf("%s\n", candidates[i].name);
                }
            }
            break;
        }

        // Eliminate anyone with minimum number of votes
        eliminate(min);

        // Reset vote counts back to zero
        for (int i = 0; i < candidate_count; i++)
        {
            candidates[i].votes = 0;
        }
    }
    return 0;
}

// Record preference if vote is valid
bool vote(int voter, int rank, string name)
{
     for (int i = 0; i < candidate_count; i++)
     {
         // Compare if the vote cast corresponds to one of the names in the candidates array.
         if (strcmp(candidates[i].name, name) == 0)
         {
             preferences[voter][rank] = i;
             return true;
         }
     }
    return false;
}

// Tabulate votes for non-eliminated candidates
void tabulate(void)
{
    // Loop through voter_count
         for (int i = 0; i < voter_count; i++)
         {
             // and candidate_count, to iterate through our matrix.
             for (int j = 0; i < candidate_count; j++)
             {
                 // Check if the candidate corresponds to the value inputed in preferences
                 if (!candidates[preferences[i][j]].eliminated)
                 {
                     // And add a vote if they were not eliminated.
                     candidates[preferences[i][j]].votes++;
                     // And we break in order to transfer the vote to the one next candidate peference.
                     break;
                 }
             }

         }
    return;
}

// Print the winner of the election, if there is one
bool print_winner(void)
{
    int winner_votes = voter_count / 2; // We could add one after dividing by two,
    for (int i = 0; i < candidate_count; i++)
    {
        if (candidates[i].votes > winner_votes) // but would have to change this one to greater or equal (>=).
        {
            printf("%s\n", candidates[i].name);
            return true;
        }
    }
    return false;
}

// Return the minimum number of votes any remaining candidate has
int find_min(void)
{
    // Let's set the least votes the maximum possible number of votes in this election.
    int least_votes = voter_count;
    // And start a loop through our candidate_count.
    for (int i = 0; i < candidate_count; i++)
    {
        // The idea is: if the candidate has not been eliminated, and has less votes than the possible total (which evryone will have at first),
        if (!candidates[i].eliminated && candidates[i].votes < least_votes)
        {
            // We replace the old value with the new smaller one.
            least_votes = candidates[i].votes;
            // And when the loop is the done, we'll have the true least votes stored in the int we set.
        }
    }
    return least_votes;
}

// Return true if the election is tied between all candidates, false otherwise
bool is_tie(int min)
{
    // Let's loop through the candidates
    for (int i = 0; i < candidate_count; i++)
    {
        // And compare everyone's vote to the min we found using the function above.
        if (candidates[i].votes > min)
        {
            // If ANY ONE candidate has more votes than the min, he's obviously the winner.
            return false;
        }
    }
    // BUT if NO ONE has more votes than the min, everyone received the same ammount of votes. So that's a tie.
    return true;
}

// Eliminate the candidate (or candidates) in last place
void eliminate(int min)
{
    // Let's look at each candidate one more time.
    for (int i = 0; i < candidate_count; i++)
    {
        // Then it's time to take those whose votes are equal the min we established.
        if (candidates[i].votes == min)
        {
            // And we turn the proverbial switch (boolean), assigning the value of true to the eliminated property.
            candidates[i].eliminated = true;
        }
    }
    return;
}