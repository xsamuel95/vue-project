<script setup>
    import { ref } from 'vue';
    const tab = ref([0, 1, 2, 3]);
    const listObject = ref([
        {id: 0, nom: "Dupont", prenom: "Alice"},
        {id: 1, nom: "Doe", prenom: "Jean"},
        {id: 2, nom: "Lefevre", prenom: "Lisa"},
        {id: 3, nom: "Grims", prenom: "Charles"}
    ]);
    const nom = ref('');
    const prenom = ref('');
    function addToList(){
        if (nom.value && prenom.value) {
            tab.value.push(listObject.value[listObject.value.length-1].id+1);
            listObject.value.push({id: listObject.value[listObject.value.length-1].id+1, nom: nom.value, prenom: prenom.value});
        }