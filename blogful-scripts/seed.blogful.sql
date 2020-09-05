BEGIN;

INSERT INTO blogful_articles
    (title, date_published, content)
VALUES 
    ('Journal Entry 1', now() - '20 days':: INTERVAL, 'Today was bad.'),
    ('Journal Entry 2', now() - '19 days':: INTERVAL , 'Today was even worse'),
    ('Journal Entry 3', now() - '18 days':: INTERVAL, 'Fuck this sucks'),
    ('Journal Entry 4', now() - '17 days':: INTERVAL, 'Oh nooooo'),
    ('Journal Entry 5', now() - '16 days':: INTERVAL, 'You had a bad day'),
    ('Journal Entry 6', now() - '15 days':: INTERVAL, 'James Blunt has scurvy'),
    ('Journal Entry 7', now() - '14 days':: INTERVAL, 'A baby penguin'),
    ('Journal Entry 8', now() - '13 days':: INTERVAL, 'Stuck on an iceburg'),
    ('Journal Entry 9', now() - '12 days':: INTERVAL, 'Whats a penguin?'),
    ('Journal Entry 10', now() - '11 days':: INTERVAL, 'Whats an iceburg?'),
    ('Journal Entry 11', now() - '10 days':: INTERVAL, 'fdas'),
    ('Journal Entry 12', now() - '9 days':: INTERVAL, 'vcxvbvb'),
    ('Journal Entry 13', now() - '8 days':: INTERVAL, 'frick'),
    ('Journal Entry 14', now() - '7 days':: INTERVAL, 'frack'),
    ('Journal Entry 15', now() - '6 days':: INTERVAL, 'frunk'),
    ('Journal Entry 16', now() - '5 days':: INTERVAL, 'drink'),
    ('Journal Entry 17', now() - '4 days':: INTERVAL, 'drank'),
    ('Journal Entry 18', now() - '3 days':: INTERVAL, 'drunk'),
    ('Journal Entry 19', now() - '2 days':: INTERVAL, 'new'),
    ('Journal Entry 20', now() - '1 days':: INTERVAL, 'shoes')
