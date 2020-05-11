<template>
  <div id="wrap" @mouseover="mouseoverfunk" @load="hehehe()"></div>
</template>

<script>
import { db } from "../db";
import router from "../router";
// console.log(router.options)
let savedtarget = null;
let active = false;
export default {
  name: "HelloWorld2222",
  methods: {
    hehehe() {
      active = false;
      hehehe2();
    },
    mouseoverfunk: function(e) {
      if (e.target != e.currentTarget && active == false) {
        active = true;
        e.target.style.transform = "scale(1.2)";
        savedtarget = e.target;
        e.target.childNodes[1].style.opacity = "1";
        e.target.childNodes[1].style.pointerEvents = "initial";
        e.target.childNodes[3].style.opacity = "0.5";
      }
      if (e.target == e.currentTarget && savedtarget != null) {
        active = false;
        savedtarget.style.transform = "scale(1)";
        savedtarget.childNodes[1].style.opacity = "0";
        savedtarget.childNodes[1].style.pointerEvents = "none";
        savedtarget.childNodes[3].style.opacity = "1";
      }
    }
  },
  created() {
    this.hehehe();
  },
  watch: {
    $route: "hehehe"
  }
};

let opslag = [];
function hehehe2() {
  a = null;
  savedtarget = null;
  db.collection("users").onSnapshot(snapshotData => {
    opslag = [];
    let htmltemplate = "";
    snapshotData.forEach(doc => {
      const opslagS = doc.data();
      opslagS.id = doc.id;
      opslag.push(opslagS);
    });
    for (let i = 0; i < opslag.length; i++) {
      htmltemplate += `<div class="opslag" id="${opslag[i].id}">
   <dIv id=""unlad"" class="optionwrap">
   <div id="unlad" class="edite"><p>Edit</p></div>
    <div id="unlad" class="delete"><p>Slet</p></div>
    </div>
    <div class="img"></div>
    <p id="navn">${opslag[i].navn}</p>
    </div>
    `;
    }
    document.getElementById("wrap").innerHTML = htmltemplate;
    for (let i = 0; i < opslag.length; i++) {
      document
        .getElementsByClassName("edite")
        [i].addEventListener("click", function() {
          EditIt(i);
        });
      document
        .getElementsByClassName("delete")
        [i].addEventListener("click", function() {
          deleteIt(i);
        });
      document.getElementsByClassName("img")[i].style.backgroundImage =
        "url(" + opslag[i].img + ")";
    }
  });
}

function deleteIt() {
  db.collection("users")
    .doc("" + savedtarget.id + "")
    .delete()
    .then(function() {
      console.log("Document successfully deleted!");
    })
    .catch(function(error) {
      console.error("Error removing document: ", error);
    });
}

function EditIt(k) {
  router.go(-1);
  a = new Object(k);
  a.navn = opslag[k].navn;
  a.img = opslag[k].img;
  a.id = opslag[k].id;
}

export let a;
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#wrap {
  margin-top: 50px;
  height: max-content;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.opslag {
  margin: 35px 35px 40px 35px;
  height: max-content;
  transition: 0.4s;
  position: relative;
}

.img {
  position: relative;
  pointer-events: none;
  max-width: 200px;
  max-height: 200px;
  height: 20vw;
  width: 20vw;
  border-style: solid;
  border-color: green;
  border-width: 2px;
  border-radius: 50%;
  background-position: center !important;
  background-size: cover !important;
  transition: 0.4s;
}

#navn {
  font-weight: bold;
  font-size: 25px;
  widows: 100%;
  text-align: center;
  position: relative;
  margin: 10px;
  transform: translatey(0%);
  top: calc(100% + 10px);
  pointer-events: none;
}

.optionwrap {
  position: absolute;
  max-width: 200px;
  max-height: 200px;
  height: 20vw;
  width: 20vw;
  z-index: 999;
  transform: translate(-50%, -0%);
  top: 3px;
  left: 50%;
  opacity: 0;
  transition: 0.4s;
  pointer-events: none;
}

.delete {
  border-radius: 10px;
  position: absolute;
  z-index: 99;
  height: 20%;
  width: 70%;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 65%;
  background: white;
  cursor: pointer;
  transition: 0.4s;
  border-style: solid;
  border-color: green;
  border-width: 2px;
  border-radius: 50px;
  color: green;
  font-size: 18px;
  font-weight: bold;
}

.delete:hover {
  background: rgb(167, 29, 29);
  border-color: white;
  color: white;
  transform: translate(-50%, -50%) scale(1.1);
}

.delete p {
  margin: 0;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  position: relative;
  pointer-events: none;
}

.edite {
  border-radius: 10px;
  position: absolute;
  z-index: 99;
  height: 20%;
  width: 70%;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 35%;
  background: white;
  cursor: pointer;
  transition: 0.4s;
  border-style: solid;
  border-color: green;
  border-width: 2px;
  border-radius: 50px;
  color: green;
  font-size: 18px;
  font-weight: bold;
}

.edite:hover {
  background: rgb(29, 89, 167);
  border-color: white;
  color: white;
  transform: translate(-50%, -50%) scale(1.1);
}

.edite p {
  margin: 0;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  position: relative;
  pointer-events: none;
}
</style>
