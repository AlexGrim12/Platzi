#include <stdio.h>
#include <math.h>

int i, n;

int main()
{
    printf("Programa que imprime las tablas del 1 al 10\n\n");
    for (n = 1; n <= 10; i++)
    {
        for (i = 1; i <= 10; i++)
        {
            printf("%i X %i = %i\n", n, i, i * n);
        }
        printf("\n");
        n = n + 1;
    }

    return 0;
}
