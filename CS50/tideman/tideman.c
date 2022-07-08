#include <cs50.h>
#include <stdio.h>
#include <string.h>

// Max number of candidates
#define MAX 9

// preferences[i][j] is number of voters who prefer i over j
// Array visualization:  https://youtu.be/VDk2Ir2Ui4A (at 5:15)
int preferences[MAX][MAX];

// locked[i][j] means i is locked in over j
bool locked[MAX][MAX];

// Each pair has a winner, loser
typedef struct
{
    int winner;
    int loser;
}
pair;

// Array of candidates
string candidates[MAX];
pair pairs[MAX * (MAX - 1) / 2];

int pair_count;
int candidate_count;

// Function prototypes
bool vote(int rank, string name, int ranks[]);
void record_preferences(int ranks[]);
void add_pairs(void);
void sort_pairs(void);
void lock_pairs(void);
void print_winner(void);

// bool funcitons from video - https://youtu.be/YhsAA0n4UzQ
// bool check_cycle(int i);
// bool check_cycle_until(int v, bool visited[]);

int main(int argc, string argv[])
{
    // Check for invalid usage
    if (argc < 2)
    {
        printf("Usage: tideman [candidate ...]\n");
        return 1;
    }

    // Populate array of candidates
    candidate_count = argc - 1; // The first argument is the program itself, so we deduct that.
    if (candidate_count > MAX)
    {
        printf("Maximum number of candidates is %i\n", MAX);
        return 2;
    }
    for (int i = 0; i < candidate_count; i++)
    {
        candidates[i] = argv[i + 1];
    }

    // Clear graph of locked in pairs
    for (int i = 0; i < candidate_count; i++)
    {
        for (int j = 0; j < candidate_count; j++)
        {
            locked[i][j] = false;
        }
    }

    pair_count = 0;
    int voter_count = get_int("Number of voters: ");

    // Query for votes
    for (int i = 0; i < voter_count; i++)
    {
        // ranks[i] is voter's ith preference
        int ranks[candidate_count];

        // Query for each rank
        for (int j = 0; j < candidate_count; j++)
        {
            string name = get_string("Rank %i: ", j + 1);

            if (!vote(j, name, ranks))
            {
                printf("Invalid vote.\n");
                return 3;
            }
        }

        record_preferences(ranks);

        printf("\n");
    }

    add_pairs();
    sort_pairs();
    lock_pairs();
    print_winner();
    return 0;
}

// Update ranks given a new vote
bool vote(int rank, string name, int ranks[])
{
    for (int i = 0; i < candidate_count; i++) // Iterate through the max number of candidates in the election
    {
        if (strcmp(candidates[i], name) == 0) // Check for matches in the ballot by using strcmp
        {
            ranks[rank] = i; // Present rank will receive candidate[i]
            return true;
        }
    }
    return false;
}

// Update preferences given one voter's ranks
void record_preferences(int ranks[])
{
    // Since we're dealing with a two dimensional array we need two different
    // for loops. the first one, let's call it rank, will deal with the rows in our array.
    for (int rank = 0; rank < candidate_count; rank++)
    {
        // And the second one will deal with the columns.
        for (int col = rank + 1; col < candidate_count; col++)
        {
            preferences[ranks[rank]][ranks[col]]++;
            // And then we update the cells in each row with how many voters prefer the row's candidate over the ones in the columns.
        }
    }
    return;
}

// Record pairs of candidates where one is preferred over the other
void add_pairs(void)
{
    // We have to look through every cell in our two dimensional array.
    for (int i = 0; i < candidate_count; i++)
    {
        for (int j = 0; j < candidate_count; j++)
        {
            // And if a candidate wins the vote count against the other,
            if(preferences[i][j] > preferences[j][i])
            {
                // the function stores them in the pairs array, both in the winner and loser position.
                pairs[pair_count].winner = i;
                pairs[pair_count].loser = j;
                pair_count++;
            }
        }
    }
    return;
}

// STARTING HERE I HAVE DOUBTS ABOUT HOW TO IMPLEMENT THE CODE

// We're sending the index of the element in the pairs array, and getting the winner and loser from this pair
int pair_weight(i)
{
    int pair_winner = pairs[i].winner;
    int pair_loser = pairs[i].loser;
    return preferences[pair_winner][pair_loser];
}

// Sort pairs in decreasing order by strength of victory
// https://dev.to/hexangel616/notes-on-algorithms-36pi#insertion-sort
void sort_pairs(void)
{
    // Reverse Selection Sort so we have descending order
    for (int i = pair_count -1; i >= 0; i--)
    {
        int min_weight = pair_weight(i);
        int min_idx = i;
        for (int j = i-1; j >= 0; j--)
        {
            if (pair_weight(j) < min_weight)
            {
                min_weight = pair_weight(j);
                min_idx = j;
            }
        }
        // Swap strongest win with current index
        pair temp = pairs[min_idx]; // might need to debug here
        pairs[min_idx] = pairs[i];
        pairs[i] = temp;
    }
    return;
}

// A Way to Look at Tideman Lock Pairs
// https://gist.github.com/nicknapoli82/6c5a1706489e70342e9a0a635ae738c9
bool has_cycle(int winner, int loser)
{
    if(locked[loser][winner] == true)
    {
        return true;
    }
    for(int i = 0; i < candidate_count; i++)
    {
        if (locked[loser][i] == true && has_cycle(winner, i)) // Recursive function
        {
            return true;
        }
    }
    return false;
}

// Lock pairs into the candidate graph in order, without creating cycles
void lock_pairs(void)
{
    for (int i = 0; i < pair_count; i++)
    {
        int winner = pairs[i].winner;
        int loser = pairs[i].loser;
        if(!has_cycle(winner, loser))
        {
            locked[winner][loser] = true;
        }
    }
    return;
}

// Print the winner of the election
void print_winner(void)
{
    for(int row = 0; row < candidate_count; row++)
    {
        for (int col = 0; col < candidate_count; col++)
        {
            if(locked[col][row] == true)
            {
                break;
            }
            else if (col == candidate_count - 1)
            {
                printf("%s\n", candidates[row]);
            }
        }
    }
    return;
}