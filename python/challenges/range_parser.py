"""
Implement a function that returns an inclusive list of numbers
from a Python slice style string with 1 <= N <= 10.

    '1'      # returns [1]
    ':7'     # returns [1, 2, 3, 4, 5, 6, 7]
    '8:'     # returns [8, 9, 10]
    '2:5'    # returns [2, 3, 4, 5]
    'a:b'    # returns 'Range values must be integers!'
    '1:2:3'  # returns 'Only two values allowed!'

"""

def range_parser(s):
    a = range(0, 11)
    min_max = s.split(':')
    if len(min_max) > 2:
        return 'Only two values allowed!'
    min = min_max[0] or '1'
    max = min
    if len(min_max) > 1:
        max = min_max[1] or '10'
    if min.isdigit() and max.isdigit():
        min = int(min)
        max = int(max) + 1
    else: 
        return 'Range values must be integers!'
    return a[slice(min, max)]

