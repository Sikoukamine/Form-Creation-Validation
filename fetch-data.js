document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    async function fetchUserData() {
        try {
            const response = await fetch(apiUrl);
            const users = await response.json();
            dataContainer.innerHTML = ''; // Clear loading message

            const userList = document.createElement('ul');

            users.forEach(user => {
                const li = document.createElement('li');
                li.textContent = user.name;
                userList.appendChild(li);
            });

            dataContainer.appendChild(userList);
        } catch (error) {
            dataContainer.innerHTML = 'Failed to load user data.';
        }
    }

    fetchUserData();
});
