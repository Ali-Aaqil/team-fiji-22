// Predefined team data
let team = [
    { name: 'Aaqil Ali', age: 20, position: 'Goalkeeper', team: 'Labasa FC' },
    { name: 'Bob Bobby', age: 32, position: 'Forward', team: 'Savusavu FC' },
    { name: 'Test', age: 'N/A', position: 'N/A', team: 'N/A' }
];

// Function to render the team data in the table
function renderTeam() {
    const teamTableBody = document.querySelector("#teamTable tbody");
    teamTableBody.innerHTML = '';  // Clear current rows

    team.forEach((player, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${player.name}</td>
            <td>${player.age}</td>
            <td>${player.position}</td>
            <td>${player.team}</td>
            <td>
                <button class="button" onclick="editPlayer(${index})">Edit</button>
                <button class="button" onclick="removePlayer(${index})">Remove</button>
            </td>
        `;

        teamTableBody.appendChild(row);
    });
}

// Function to add a new player
function addPlayer() {
    const name = document.getElementById('playerName').value;
    const age = document.getElementById('playerAge').value;
    const position = document.getElementById('playerPosition').value;
    const teamName = document.getElementById('playerTeam').value;

    // Make all fields required
    if (!name || !age || !position || !teamName) {
        alert("Please fill out all fields.");
        return;
    }

    // Add the new player to the team array
    team.push({
        name: name,
        age: parseInt(age),
        position: position,
        team: teamName
    });

    // Clear the form inputs
    document.getElementById('playerName').value = '';
    document.getElementById('playerAge').value = '';
    document.getElementById('playerPosition').value = '';
    document.getElementById('playerTeam').value = '';

    // Re-render the team table
    renderTeam();
}

// Edit player function
function editPlayer(index) {
    const player = team[index];

    const newName = prompt("Edit Name", player.name);
    const newAge = prompt("Edit Age", player.age);
    const newPosition = prompt("Edit Position", player.position);
    const newTeam = prompt("Edit Team", player.team);

    team[index] = {
        name: newName || player.name,
        age: parseInt(newAge) || player.age,
        position: newPosition || player.position,
        team: newTeam || player.team
    };

    renderTeam();
}

// Remove player function
function removePlayer(index) {
    team.splice(index, 1);  // Remove player from array
    renderTeam();  // Re-render team
}

// Initial load of team data
window.onload = function() {
    renderTeam();
};
