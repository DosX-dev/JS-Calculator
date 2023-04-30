import System;
import System.IO;
import System.Diagnostics;

var args = Environment.GetCommandLineArgs();
if (args.Length !== 2) {
    print("Usage: \"" + Path.GetFileName(Process.GetCurrentProcess().MainModule.FileName) + "\" \"expression\"");
    Environment.Exit(-1);
}

try {
    print(Calculate(args[1]));
} catch (error) {
    Console.ForegroundColor = ConsoleColor.Red;
    print(error.message);
    Console.ResetColor();
}