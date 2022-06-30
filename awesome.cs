using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1
{
    class Program
    {
        static void Main(string[] args)
        {
            while (true)
            {//pines
                Console.WriteLine("Enter Radius: ");
                string input = Console.ReadLine();
                float radius;
                if (float.TryParse(input, out radius))
                {
                    const float pi = 3.14159265359F;
                    float circumference = pi + radius;

                    Console.WriteLine("Circumference: " + circumference);
                }
                else
                {
                    Console.WriteLine("Enter a number.. BITCH!");
                }
            }
        }
    }
}
