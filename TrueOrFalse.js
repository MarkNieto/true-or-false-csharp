using System;

namespace TrueOrFalse
{
  class Program
  {
		static void Main(string[] args)
    {
      // Do not edit these lines
      Console.WriteLine("Welcome to 'True or False?'\nPress Enter to begin:");
      string entry = Console.ReadLine();
      Tools.SetUpInputStream(entry);

      // Type your code below
      //1.- Declare and initialize an array.
      string[] questions = {"i am Mark?", "i'm the best?", "i'm the most handsome?", "i'm the best programmer in the world?", "i will be the best men in the world?"};

      //2.- Declare and initialize a bool array.
      bool[] answers = {true, true, true, true, true};

      //3.- Declare a bool array with the same length as the question array.
      bool[] responses = new bool[questions.Length];

      //4.- If statement that checks the lengths of the arrays.
      if(questions.Length != answers.Length){

        Console.WriteLine("Warning! The length of questions and answers are not equal.");

      }

      //5.- Create a variable to keep track of the currently asked question.
      int askingIndex = 0;

      //6.- Build an empty foreach loop that iterates through each question in question array.
      foreach(string question in questions){
      //7.- Define and inizialice some variables.
      string input;
      bool isBool;
      bool inputBool;

      //8.- Ask the question once, print if it is true or false and capture the user's input in input variable.
      Console.WriteLine(question);
      Console.WriteLine("Its True or False.");
      input = Console.ReadLine();

      //9.- Lets check if we can convert the user's input into a boolean.
      isBool = Boolean.TryParse(input, out inputBool);

      //11.- While loop within the foreach loop
      while(!isBool){
      //12.- If the user doesn't respond with true or false, print for asc again.
        Console.WriteLine("Please respond with 'True' or 'False'.");
        input = Console.ReadLine();
        isBool = Boolean.TryParse(input, out inputBool);
      }

      //13.- Store user's boolean ans in responses and increment askingIndex by 1
      responses[askingIndex] = inputBool;
      askingIndex++;

      }
      Console.WriteLine("Here you have your answers.");

      //14.- Printing out the values of responses and test the code.
      foreach (bool response in responses){
        Console.WriteLine(response);
      }
      //15.- Now we will compare all those responses to the answers array and count the number of correct responses, define few variables.
      int scoringIndex = 0;
      int score = 0;
      //16.- Create a new foreach that iterates throug each answer in answers.
      foreach(bool ans in answers){
        //17.- Capture the response value in a variable and use scoringIndex to access an element.
        bool scoreResponse = responses[scoringIndex];

        //18.- Write out user response and correct answer for each answer in answers array.
        Console.WriteLine(scoringIndex + 1 + ".");
        Console.WriteLine($"Input: {scoreResponse} | Answer: {ans} ");
        scoringIndex++;
      }

    }
  }
}
