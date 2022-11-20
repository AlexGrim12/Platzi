#include <stdio.h>
#include <math.h>
int n1, v1, v2, v3;

int main()
{
    printf("Introduce un número de tres cifras: ");
    scanf("%d", &n1);
    if (n1 > 100 && n1 < 999)
    {
        v1 = n1 / 100;
        v2 = (n1 - (v1 * 100)) / 10;
        v3 = n1 - (v1 * 100) - (v2 * 10);
        if (v1 == v3)
        {
            printf("El número %i es capicúa", n1);
        }
        else
            printf("El número %i no es capicúa", n1);
    }
    else
        printf("El número dado no pertenece al intervalo solicitado");
    return 0;
}