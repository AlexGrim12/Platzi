#include <stdio.h>
#include <stdlib.h>
int main()
{
    int numero, cifra, reves = 0, copia;
    do
    {
        printf("Dame un numero entre 0 y 999999999");
        scanf("%d", &numero);
    } while (numero < 0);

    copia = numero;
    while (numero != 0)
    {
        cifra = numero % 10;
        reves = reves * 10 + cifra;
        numero = numero / 10;
    }

    if (copia == reves)
        printf("El numero %d SI es capicua\n", copia);
    else
        printf("El numero %d NO es capicua\n", copia);

    system("PAUSE");
}