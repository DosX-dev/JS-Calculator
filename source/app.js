// Coded by DosX
// https://github.com/DosX-dev

import System;
import System.IO;
import System.Diagnostics;

if (Console.CursorTop == 0 &&
    Console.CursorLeft == 0 &&
    Process.GetCurrentProcess().MainModule.FileName.Contains(":\\")) {
    Console.ForegroundColor = ConsoleColor.Red;
    print("It's a console app! Use it through any terminal.\n------------------------------------------------\n");
    Console.ResetColor();
    showHelp();
    Console.ReadKey(true);
}

var args = Environment.GetCommandLineArgs();
if (args.Length !== 2) {
    showHelp();
    Environment.Exit(-1);
}

try {
    var expression: String = args[1].Replace(",", ".").Replace(" ", "").Trim();
    var result: int = calculate(expression);

    Console.Write(expression + "=")
    Console.ForegroundColor = ConsoleColor.Green;
    print(result.toString("0.00"));
    Console.ResetColor();
} catch (error) {
    Console.ForegroundColor = ConsoleColor.Red;
    print(error.message);
    Console.ResetColor();
}

function showHelp() {
    var currentProgramFileName: String = Path.GetFileName(Process.GetCurrentProcess().MainModule.FileName);
    Console.ResetColor();
    print("Usage: \"" + currentProgramFileName + "\" \"expression\"");
    Console.ForegroundColor = ConsoleColor.DarkGray;
    print("Allowed characters: \"0123456789.,+-*/()\"");
    Console.ResetColor();
}
