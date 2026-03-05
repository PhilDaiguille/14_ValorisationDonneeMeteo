# Exercise 2: Git Conflict Simulation and Resolution

## Context

The exercise consists of simulating a Git conflict between several team members, then resolving it and documenting the process.

The file involved is `README.md`, on the line indicating the season number of the Data For Good project.

## Simulation Steps

### 1. Initial State (branch `main`)

```
Projet Data For Good - Saison 14
```

### 2. Creating Conflicting Changes

Three team members modified the same line of the README in parallel:

| Branch | Author | Change | Commit |
|---|---|---|---|
| `feat/conflit` | Camille Girard | Saison 14 → **Saison 16** | `0eec1a2` |
| `main` | PhilDaiguille | Saison 14 → Saison 15 → **Saison 19** | `1b16b1d`, `130f728` |
| `feat/conflit2` | Catalina Danila | Saison 15 → **Saison 177** | `a3149da` |

### 3. Conflict Detection

During a `git merge` or `git pull`, Git detects that the same line of `README.md` has been modified in different branches. It cannot merge automatically because the changes are incompatible.

Example Git message:
```
Auto-merging README.md
CONFLICT (content): Merge conflict in README.md
Automatic merge failed; fix conflicts and then commit the result.
```

### 4. Viewing the Conflict

Git inserts conflict markers into the file:

```
<<<<<<< HEAD
Projet Data For Good - Saison 19
=======
Projet Data For Good - Saison 16
>>>>>>> feat/conflit
```

- `<<<<<<< HEAD`: version from the current branch (main)
- `=======`: separator
- `>>>>>>> feat/conflit`: version from the incoming branch

### 5. Resolving the Conflict

To resolve the conflict:

1. **Open the file** containing the conflict markers
2. **Choose the correct version** (or combine changes) by removing the `<<<<<<<`, `=======`, `>>>>>>>` markers
3. **Save** the file
4. **Stage the resolved file**: `git add README.md`
5. **Finalize the merge**: `git commit`

In our case, the correct value kept was **Saison 19** (the latest update on `main`).

### 6. Verification

After resolution:
```bash
git log --oneline --graph
```
Confirm that the merge commit is present and the history is clean.