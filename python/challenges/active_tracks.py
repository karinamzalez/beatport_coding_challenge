"""
Given a list of track data, return the IDs of active tracks.
The list may contain duplicate tracks.

    [
        {
            'id': 1,
            'name': 'In Arms',
            'active': True,
        },
        {
            'id': 2,
            'name': 'Deep Dip',
            'active': False,
        },
        {
            'id': 3,
            'name': 'Panic Room',
            'active': True,
        },
        {
            'id': 1,
            'name': 'In Arms',
            'active': True,
        },
    ]  # should return [1, 3]

"""

def active_tracks(tracks):
    active_ids = []
    for obj in tracks: 
        active_ids.append(obj['id']) if obj['active'] else ''
    my_set = set(active_ids)
    unique_ids = list(my_set)
    return unique_ids

