<template>
  <div>
    <div id="imgpreview">
      <input
        class="opsetinput2"
        type="file"
        name="file"
        id="img"
        accept="image/*"
        @change="previewFiles"
        multiple
      />
      <label for="img"><p>Vælg billede</p></label>
    </div>
    <h1 id="navnn">Indtast Navn:</h1>
    <input id="navninput" type="text" @input="validcheck" v-model="name" />
    <div id="hejhej" @click="sendnavn()"><p id="knaptekst">Send</p></div>
    <p id="opretny" @click="reset()">Opret ny?</p>
  </div>
</template>

<script>
let senavnmanner = "";
let savedimgurl2;
let update = false;
let imgcheck = false;
let namecheck = false;
import { db } from "../db";
import router from "../router";
import { a } from "./sebruger.vue";
export default {
  name: "lavopslag",
  data() {
    return {
      name: this.navn
    };
  },
  methods: {
    sendnavn() {
      if (!update) {
        console.log(senavnmanner, savedimgurl2);
        db.collection("users")
          .doc()
          .set({
            navn: senavnmanner,
            img: savedimgurl2
          });
      } else {
        db.collection("users")
          .doc(a.id)
          .set({
            navn: senavnmanner,
            img: savedimgurl2
          });
      }
      router.go(-1);
    },
    reset() {
      if (a != null) {
        update = false;
        imgcheck = false;
        namecheck = false;
        senavnmanner = a.navn;
        document.getElementById("opretny").style.display = "none";
        document.getElementById("navnn").innerHTML = "Indtast Navn:";
        document.getElementById("navninput").value = "";
        document.getElementById("knaptekst").innerHTML = "Send";
        savedimgurl2 = a.img;
        document.getElementById("imgpreview").style.background = "";
        wwwwaaa();
      }
    },
    previewFiles(event) {
      imgcheck = true;
      wwwwaaa();
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = function() {
        document.getElementById("imgpreview").style.background =
          "url(" + reader.result + ")";
        savedimgurl2 = reader.result;
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    },
    validcheck(event) {
      if (event.target.value != "") {
        senavnmanner = event.target.value;
        document.getElementById("navnn").innerHTML = event.target.value;
        namecheck = true;
      } else {
        document.getElementById("navnn").innerHTML = "Indtast Navn:";
        namecheck = false;
      }
      wwwwaaa();
    }
  },
  mounted: function() {
    if (a != null) {
      update = true;
      imgcheck = true;
      namecheck = true;
      senavnmanner = a.navn;
      document.getElementById("opretny").style.display = "initial";
      document.getElementById("navnn").innerHTML = a.navn;
      document.getElementById("navninput").value = a.navn;
      document.getElementById("knaptekst").innerHTML = "Opdater";
      savedimgurl2 = a.img;
      document.getElementById("imgpreview").style.background =
        "url(" + savedimgurl2 + ")";
      wwwwaaa();
    } else {
      document.getElementById("opretny").style.display = "none";
      console.log("supboi");
      update = false;
      imgcheck = false;
      namecheck = false;
    }
  }
};

// function presetf2() {
//   console.log(document.getElementById("imgpreview"))
//   // document.getElementById("imgpreview").style.background = "red"
// //   if (a != null) {
// // savedimgurl2 = a.img
// // document.getElementById("imgpreview").style.background = "red"
// //   }
// }
function wwwwaaa() {
  if (imgcheck && namecheck) {
    document.getElementById("hejhej").style.opacity = 1;
    document.getElementById("hejhej").style.pointerEvents = "initial";
    document.getElementById("hejhej").style.cursor = "pointer";
  } else {
    document.getElementById("hejhej").style.opacity = 0.3;
    document.getElementById("hejhej").style.pointerEvents = "none";
    document.getElementById("hejhej").style.cursor = "none";
  }
}
// document.getElementById("inputData").oninput = function() {
//   readycheck();
// };

// function readycheck() {
//   console.log("yus");
// }
// name: "HelloWorld",
// props: {
//   msg: String
// }
// import { db } from "../db"
//   console.log(db.collection("bruger").doc())
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#hejhej {
  opacity: 0.3;
  pointer-events: none;
  cursor: pointer;
  width: 15vw;
  min-width: 100px;
  max-width: 400px;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 30px !important;
  position: relative;
  height: 50px;
  margin-top: 20px;
  border-style: solid;
  border-color: green;
  border-width: 2px;
  border-radius: 50px;
  color: green;
  font-size: 22px;
  font-weight: bold;
  transition: 0.4s;
  margin-bottom: 20px;
}

#hejhej:hover {
  transform: translate(-50%, -50%) scale(1.3);
  color: white;
  background-color: rgb(29, 167, 29);
  border-color: white;
}

#hejhej p {
  margin: 13px 0 0 0;
}

#opretny {
  color: green;
  text-decoration-line: underline;
  cursor: pointer;
  display: none;
  margin-top: 30px !important;
  padding: 22px;
}
#opretny:hover {
  color: rgb(0, 177, 0);
}

.opsetinput2 {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}

.opsetinput2 + label {
  position: relative;
  border-radius: 75px;
  top: 70%;
  font-size: 100%;
  font-weight: 700;
  color: white;
  border-style: solid;
  border-color: green;
  border-width: 2px;
  display: inline-block;
  width: 60%;
  min-width: 120px;
  height: 50px;
  background-color: green;
  color: white;
  transition: 0.4s;
}

.opsetinput2 + label p {
  position: relative;
  margin: 0;
  transform: translateY(-50%);
  top: 50%;
}

.opsetinput2 + label:hover {
  transform: scale(1.1);
  cursor: pointer;
  background-color: rgb(29, 167, 29);
  border-color: white;
}

#imgpreview {
  margin-top: 40px;
  position: relative;
  transform: translateX(-50%);
  left: 50%;
  max-width: 300px;
  max-height: 300px;
  height: 30vw;
  width: 30vw;
  border-style: solid;
  border-color: rgba(0, 128, 0, 0.603);
  border-width: 2px;
  border-radius: 50%;
  background-position: center !important;
  background-size: cover !important;
}

input[type="text"] {
  color: rgb(99, 99, 99);
  text-align: center;
  width: 30vw;
  min-width: 200px;
  max-width: 400px;
  font-size: 20px;
  padding: 10px;
  margin: 0px;
  border: 2px solid rgba(0, 0, 0, 0.247);
  border-radius: 12px;
  transition: 0.4s;
}

input[type="text"]:focus {
  outline: none;
  border-color: rgb(29, 167, 29);
}
</style>
