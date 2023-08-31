// linked list implementation
#include <iostream>
using namespace std;
class node
{
public:
    int data;
    node *next;
};

int main()
{
    int ch = 1;
    node *head = NULL;
    node *temp;

    while (ch)
    {
        node *newNode = new node();
        cout << "Enter the data";
        cin >> newNode->data;
        if (head == NULL)
        {
            head = temp = newNode;
        }
        else
        {
            temp->next = newNode;
            temp = newNode;
        }
        cout << "you want to instert more";
        cin >> ch;
    }

    temp = head;
    while (temp->next != 0)
    {
        cout << temp->data << " ";
        temp = temp->next;
    }
}
