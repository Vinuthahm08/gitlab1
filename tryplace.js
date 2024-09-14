const ctx = document.getElementById('myPieChart').getContext('2d');
const data = {
    labels: ['Placed', 'Higher Studies', 'Entrepreneurs'],
    datasets: [{
        data: [1678,368,132], // Example data, replace with your data
        backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
        hoverBackgroundColor: ['#36A2EB', '#FF6384', '#FFCE56']
    }]
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top'
        },
        tooltip: {
            enabled: true
        }
    },
    animation: {
        animateRotate: true,
        animateScale: true,
        duration: 5000,
        easing: 'easeOutBounce'
    }
};

const myPieChart = new Chart(ctx, {
    type: 'pie',
    data: data,
    options: options
});
