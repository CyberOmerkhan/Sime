#include <iostream>
#include <vector>
#include <algorithm>
#include <random>
#include <chrono>

using namespace std;

random_device rd;
mt19937 g(rd());

int excluding(int v1, int v2){
    for(int i = 0; i < 3; i++){
        if(i != v1 && i != v2)
            return i;
    }
}

bool unitSimulation() {
    vector <int> arr = {1, 0, 0};
    vector <int> goatIndices;
    uniform_int_distribution<> distrib(0,  2);
    shuffle(arr.begin(), arr.end(), g);
    int initialPick = distrib(g);  
    for(int i = 0; i < 3; i++) {
        if(initialPick != i && arr[i] == 0){
            goatIndices.push_back(i);
        }
    }
    uniform_int_distribution<> goat(0,  (int)goatIndices.size() - 1);
    int goatReveal = goatIndices[goat(g)];
    // cout << "user chose: " << initialPick << " goat revealed: " << goatReveal << '\n';

    // switch:
    initialPick = excluding(goatReveal, initialPick);
    return arr[initialPick];
}

int main() {
    int switchAndWin = 0;
    int stayAndWin = 0;
    for(int i = 0; i < 100000; i++){
        switchAndWin += unitSimulation();
        stayAndWin += !unitSimulation();
    }
    cout << "Switch and win: " << switchAndWin << "\nStay and win: " << stayAndWin << '\n';
}