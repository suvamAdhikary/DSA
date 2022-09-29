#include <iostream>
#include <climits>
using namespace std;

class Solution {
public:
    int maximumWealth(vector<vector<int>>& accounts) {
        int res = 0;
        for(int i = 0; i < accounts.size(); i++){
            int total = 0;
            for(int j = 0; j < accounts[i].size(); j++){
                total += accounts[i][j];
            }
            res = std::max(res, total);
        }
        return res;
    }
};

int main()
{
    int a[R][C] = { { 1, 2, 3, 4 },
                    { 5, 6, 7, 8 },
                    { 9, 10, 11, 12 },
                    { 13, 14, 15, 16 } };
 
    // Function Call
    maximumWealth(a);
    return 0;
}
