using namespace std ;
int v[5];
int i;
main(){
	srand((unsigned) time(NULL));
	for(i=0; i<5;i++)
	v[i]= rand () % 30;
	cout << "O valores do array sao:";
	system ("Pause");
}