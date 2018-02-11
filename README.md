# habitual

## Description

A web application to help me track habits - tasks that are performed on a
regular basis in the hope that they stick!

Mainly created to give me a chance to create a full react and redux application
with a real backend.

## Component hierarchy

1. **HabitList** - contains a list of habits in a card layout
2. **Habit** - a single habit card showing name, description, frequency and a
   progress bar

## Redux State

```
{
  habits: [
    {
      id: 'b6eb3e66-f3e4-4102-90d8-e7ae527d5d47',
      name: 'Running',
      description: 'Go for a run',
      frequency: 2,
      progress: 0
    },
  ]
}
```

## TODO

1. Style it using CSS modules
2. Add unit tests for actions, reducers etc.
3. Add proptypes
