"""
Implement a math class with methods for addition, subtraction,
multiplication and division. If an input is provided that is not an
int, a message should be returned instead of raising an error.

    'a' + 3  # should return 'Inputs must be numbers!'

"""

import operator

class Math():
    def validateIntegers(self, num1, num2, action):
        if not isinstance(num1, int) or not isinstance(num2, int):
            return 'Inputs must be numbers!'
        else: 
            return action(num1, num2)
    def add(self, num1, num2): 
        return self.validateIntegers(num1, num2, operator.add)
    def subtract(self, num1, num2): 
        return self.validateIntegers(num1, num2, operator.sub)
    def multiply(self, num1, num2): 
        return self.validateIntegers(num1, num2, operator.mul)
    def divide(self, num1, num2): 
        return self.validateIntegers(num1, num2, operator.div)
