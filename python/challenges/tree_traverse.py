"""
Given a deeply nested dict, create a function that returns a
value within a tree when given the tree and a key. If there are
duplicates, the first result found should be returned.

    {
        'a': {
            'b': 123,
            'c': 456,
            'd': {
                'z': 789,
            },
        },
        'x': {
            'y': 111,
        },
    }  # input of 'z' should return '789'

"""

def tree_traverse(tree, input_key):
    for key, value in tree.items():
        if input_key == key:
             return value
        elif isinstance(value, dict):
            value = tree_traverse(value, input_key)
            if value is not None: 
                return value