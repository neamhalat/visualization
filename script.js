document.getElementById('encoder').addEventListener('click', function() {
    alert('This is the Encoder block. It extracts features from the noisy image.');
});

document.getElementById('knowledge-base').addEventListener('click', function() {
    alert('This is the Dynamic Knowledge Base block. It learns spatially varying filters.');
});

document.getElementById('decoder').addEventListener('click', function() {
    alert('This is the Decoder block. It reconstructs the denoised image using the learned knowledge base.');
});
