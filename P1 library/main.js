/*P1 Library*/

//Get references
const Console = document.getElementById("Console");
const TextArea = document.getElementById("ConsoleTA");
const Toggle = document.getElementById("ConsoleToggle");

//Defaults
var Keydown = function(event){};
var Keyup = function(event){};
var OnMessage = function(message){};
var OnError = function(message){};
var Start = function(){};
window.updateInterval = 0;
window.eventTimeout = 0;
window.lastClicked = null;

var keycode = {};

(function(){
  function Warn(){new Warning("Protection level", "Cannot set property due to its protection level.");}

  Object.defineProperty(keycode, "leftArrow", {
    enumerable: true, get: function(){return 37;}, set: Warn
  });
  Object.defineProperty(keycode, "upArrow", {
    enumerable: true, get: function(){return 38;}, set: Warn
  });
  Object.defineProperty(keycode, "rightArrow", {
    enumerable: true, get: function(){return 39;}, set: Warn
  });
  Object.defineProperty(keycode, "downArrow", {
    enumerable: true, get: function(){return 40;}, set: Warn
  });
  Object.defineProperty(keycode, "space", {
    enumerable: true, get: function(){return 32;}, set: Warn
  });
  Object.defineProperty(keycode, "escape", {
    enumerable: true, get: function(){return 27;}, set: Warn
  });
  Object.defineProperty(keycode, "f1", {
    enumerable: true, get: function(){return 112;}, set: Warn
  });
  Object.defineProperty(keycode, "f2", {
    enumerable: true, get: function(){return 113;}, set: Warn
  });
  Object.defineProperty(keycode, "f3", {
    enumerable: true, get: function(){return 114;}, set: Warn
  });
  Object.defineProperty(keycode, "f4", {
    enumerable: true, get: function(){return 115;}, set: Warn
  });
  Object.defineProperty(keycode, "f5", {
    enumerable: true, get: function(){return 116;}, set: Warn
  });
  Object.defineProperty(keycode, "f6", {
    enumerable: true, get: function(){return 117;}, set: Warn
  });
  Object.defineProperty(keycode, "f7", {
    enumerable: true, get: function(){return 118;}, set: Warn
  });
  Object.defineProperty(keycode, "f8", {
    enumerable: true, get: function(){return 119;}, set: Warn
  });
  Object.defineProperty(keycode, "f9", {
    enumerable: true, get: function(){return 120;}, set: Warn
  });
  Object.defineProperty(keycode, "f10", {
    enumerable: true, get: function(){return 121;}, set: Warn
  });
  Object.defineProperty(keycode, "f11", {
    enumerable: true, get: function(){return 122;}, set: Warn
  });
  Object.defineProperty(keycode, "f12", {
    enumerable: true, get: function(){return 123;}, set: Warn
  });
  Object.defineProperty(keycode, "backquote", {
    enumerable: true, get: function(){return 191;}, set: Warn
  });
  Object.defineProperty(keycode, "digit1", {
    enumerable: true, get: function(){return 49;}, set: Warn
  });
  Object.defineProperty(keycode, "digit2", {
    enumerable: true, get: function(){return 50;}, set: Warn
  });
  Object.defineProperty(keycode, "digit3", {
    enumerable: true, get: function(){return 51;}, set: Warn
  });
  Object.defineProperty(keycode, "digit4", {
    enumerable: true, get: function(){return 52;}, set: Warn
  });
  Object.defineProperty(keycode, "digit5", {
    enumerable: true, get: function(){return 53;}, set: Warn
  });
  Object.defineProperty(keycode, "digit6", {
    enumerable: true, get: function(){return 54;}, set: Warn
  });
  Object.defineProperty(keycode, "digit7", {
    enumerable: true, get: function(){return 55;}, set: Warn
  });
  Object.defineProperty(keycode, "digit8", {
    enumerable: true, get: function(){return 56;}, set: Warn
  });
  Object.defineProperty(keycode, "digit9", {
    enumerable: true, get: function(){return 57;}, set: Warn
  });
  Object.defineProperty(keycode, "digit0", {
    enumerable: true, get: function(){return 48;}, set: Warn
  });
  Object.defineProperty(keycode, "minus", {
    enumerable: true, get: function(){return 173;}, set: Warn
  });
  Object.defineProperty(keycode, "equal", {
    enumerable: true, get: function(){return 61;}, set: Warn
  });
  Object.defineProperty(keycode, "A", {
    enumerable: true, get: function(){return 65;}, set: Warn
  });
  Object.defineProperty(keycode, "B", {
    enumerable: true, get: function(){return 66;}, set: Warn
  });
  Object.defineProperty(keycode, "C", {
    enumerable: true, get: function(){return 67;}, set: Warn
  });
  Object.defineProperty(keycode, "D", {
    enumerable: true, get: function(){return 68;}, set: Warn
  });
  Object.defineProperty(keycode, "E", {
    enumerable: true, get: function(){return 69;}, set: Warn
  });
  Object.defineProperty(keycode, "F", {
    enumerable: true, get: function(){return 70;}, set: Warn
  });
  Object.defineProperty(keycode, "G", {
    enumerable: true, get: function(){return 71;}, set: Warn
  });
  Object.defineProperty(keycode, "H", {
    enumerable: true, get: function(){return 72;}, set: Warn
  });
  Object.defineProperty(keycode, "I", {
    enumerable: true, get: function(){return 73;}, set: Warn
  });
  Object.defineProperty(keycode, "J", {
    enumerable: true, get: function(){return 74;}, set: Warn
  });
  Object.defineProperty(keycode, "K", {
    enumerable: true, get: function(){return 75;}, set: Warn
  });
  Object.defineProperty(keycode, "L", {
    enumerable: true, get: function(){return 76;}, set: Warn
  });
  Object.defineProperty(keycode, "M", {
    enumerable: true, get: function(){return 77;}, set: Warn
  });
  Object.defineProperty(keycode, "N", {
    enumerable: true, get: function(){return 78;}, set: Warn
  });
  Object.defineProperty(keycode, "O", {
    enumerable: true, get: function(){return 79;}, set: Warn
  });
  Object.defineProperty(keycode, "P", {
    enumerable: true, get: function(){return 80;}, set: Warn
  });
  Object.defineProperty(keycode, "Q", {
    enumerable: true, get: function(){return 81;}, set: Warn
  });
  Object.defineProperty(keycode, "R", {
    enumerable: true, get: function(){return 82;}, set: Warn
  });
  Object.defineProperty(keycode, "S", {
    enumerable: true, get: function(){return 83;}, set: Warn
  });
  Object.defineProperty(keycode, "T", {
    enumerable: true, get: function(){return 84;}, set: Warn
  });
  Object.defineProperty(keycode, "U", {
    enumerable: true, get: function(){return 85;}, set: Warn
  });
  Object.defineProperty(keycode, "V", {
    enumerable: true, get: function(){return 86;}, set: Warn
  });
  Object.defineProperty(keycode, "W", {
    enumerable: true, get: function(){return 87;}, set: Warn
  });
  Object.defineProperty(keycode, "X", {
    enumerable: true, get: function(){return 88;}, set: Warn
  });
  Object.defineProperty(keycode, "Y", {
    enumerable: true, get: function(){return 89;}, set: Warn
  });
  Object.defineProperty(keycode, "Z", {
    enumerable: true, get: function(){return 90;}, set: Warn
  });
  Object.defineProperty(keycode, "home", {
    enumerable: true, get: function(){return 36;}, set: Warn
  });
  Object.defineProperty(keycode, "end", {
    enumerable: true, get: function(){return 35;}, set: Warn
  });
  Object.defineProperty(keycode, "delete", {
    enumerable: true, get: function(){return 46;}, set: Warn
  });
  Object.defineProperty(keycode, "capslock", {
    enumerable: true, get: function(){return 20;}, set: Warn
  });
  Object.defineProperty(keycode, "shift", {
    enumerable: true, get: function(){return 16;}, set: Warn
  });
  Object.defineProperty(keycode, "ctrl", {
    enumerable: true, get: function(){return 17;}, set: Warn
  });
  Object.defineProperty(keycode, "alt", {
    enumerable: true, get: function(){return 18;}, set: Warn
  });
  Object.defineProperty(keycode, "tab", {
    enumerable: true, get: function(){return 9;}, set: Warn
  });
  Object.defineProperty(keycode, "leftOS", {
    enumerable: true, get: function(){return 91;}, set: Warn
  });
  Object.defineProperty(keycode, "backspace", {
    enumerable: true, get: function(){return 8;}, set: Warn
  });
  Object.defineProperty(keycode, "enter", {
    enumerable: true, get: function(){return 13;}, set: Warn
  });
  Object.defineProperty(keycode, "leftBracket", {
    enumerable: true, get: function(){return 160;}, set: Warn
  });
  Object.defineProperty(keycode, "rightBracket", {
    enumerable: true, get: function(){return 221;}, set: Warn
  });
  Object.defineProperty(keycode, "backslash", {
    enumerable: true, get: function(){return 220;}, set: Warn
  });
  Object.defineProperty(keycode, "semicolon", {
    enumerable: true, get: function(){return 59;}, set: Warn
  });
  Object.defineProperty(keycode, "quote", {
    enumerable: true, get: function(){return 192;}, set: Warn
  });
  Object.defineProperty(keycode, "comma", {
    enumerable: true, get: function(){return 188;}, set: Warn
  });
  Object.defineProperty(keycode, "period", {
    enumerable: true, get: function(){return 190;}, set: Warn
  });
  Object.defineProperty(keycode, "slash", {
    enumerable: true, get: function(){return 191;}, set: Warn
  });
  Object.defineProperty(keycode, "pageUp", {
    enumerable: true, get: function(){return 33;}, set: Warn
  });
  Object.defineProperty(keycode, "pageDown", {
    enumerable: true, get: function(){return 34;}, set: Warn
  });
  Object.defineProperty(keycode, "numlock", {
    enumerable: true, get: function(){return 144;}, set: Warn
  });
  Object.defineProperty(keycode, "divide", {
    enumerable: true, get: function(){return 111;}, set: Warn
  });
  Object.defineProperty(keycode, "multiply", {
    enumerable: true, get: function(){return 106;}, set: Warn
  });
  Object.defineProperty(keycode, "subtract", {
    enumerable: true, get: function(){return 109;}, set: Warn
  });
  Object.defineProperty(keycode, "add", {
    enumerable: true, get: function(){return 107;}, set: Warn
  });
  Object.defineProperty(keycode, "numpad1", {
    enumerable: true, get: function(){return 97;}, set: Warn
  });
  Object.defineProperty(keycode, "numpad2", {
    enumerable: true, get: function(){return 98;}, set: Warn
  });
  Object.defineProperty(keycode, "numpad3", {
    enumerable: true, get: function(){return 99;}, set: Warn
  });
  Object.defineProperty(keycode, "numpad4", {
    enumerable: true, get: function(){return 100;}, set: Warn
  });
  Object.defineProperty(keycode, "numpad5", {
    enumerable: true, get: function(){return 101;}, set: Warn
  });
  Object.defineProperty(keycode, "numpad6", {
    enumerable: true, get: function(){return 102;}, set: Warn
  });
  Object.defineProperty(keycode, "numpad7", {
    enumerable: true, get: function(){return 103;}, set: Warn
  });
  Object.defineProperty(keycode, "numpad8", {
    enumerable: true, get: function(){return 104;}, set: Warn
  });
  Object.defineProperty(keycode, "numpad9", {
    enumerable: true, get: function(){return 105;}, set: Warn
  });
  Object.defineProperty(keycode, "numpad0", {
    enumerable: true, get: function(){return 96;}, set: Warn
  });
  Object.defineProperty(keycode, "decimal", {
    enumerable: true, get: function(){return 110;}, set: Warn
  });
})();

const keyCode = keycode;
keycode = undefined;
delete(keycode);

var exception;
var warning;
var log;
var inputlog;
var popup;

var dir2d;
var vector2;
var vector3;

var canvas;

var circle;
var line;
var box;
var sprite;

(function(){
  var key = false;

  function Warn(){new Warning("Protection level", "Cannot set property due to its protection level.");}

  var canvases = [];
  Object.defineProperty(window, "canvases", {
    enumerable: true, get: function(){if(key)return canvases;else return Array.from(canvases);}, set: Warn
  });

  //Message objects
  exception = function(type, content, reference)
  {
    var result;
    if(isValueDefined(content))
    {
      if(isValueDefined(reference) && typeof reference == "object")
      {
        result = `${type.toString()} exception in ${reference.constructor.name} class:<br/>${content.toString().replace(/\n/g, "<br/>")}`;

        key = true;
        reference.isValid = false;
        key = false;
      }
      else
        result = `${type.toString()} exception:<br/>${content.toString().replace(/\n/g, "<br/>")}`;
    }
    else
      result = `Exception:<br/>${type.toString().replace(/\n/g, "<br/>")}`;

    Object.defineProperty(this, "content", {
      enumerable: true, get: function(){return result}, set: Warn
    });

    Object.defineProperty(this, "toString", {
      enumerable: true, get: function(){return function(){return this.content;};}, set: Warn
    });

    Object.defineProperty(this, "typeOf", {
      enumerable: true, get: function(){return function(){return "Exception";};}, set: Warn
    });

    var print = function()
    {
      var BlankLog = document.getElementById("BlankLog");

      if(BlankLog !== null)
        BlankLog.remove();

      var Logs = document.getElementById("Logs");

      var display = document.createElement("div");
      try
      {
        Object.defineProperty(this, "display", {
          enumerable: true, get: function(){return display;}, set: Warn
        });
      }
      catch(error)
      {
        display.remove();
        new Exception("Double call", "Cannot call function 'print' after it was already called once.");
        return;
      }
      Logs.appendChild(display);
      display.className = "ErrLog";

      var icon = document.createElement("img");
      display.appendChild(icon);
      icon.src = "../Assets/Images/RedX.png";

      var P = document.createElement("p");
      display.appendChild(P);
      P.innerHTML = this.content.toString();

      display.scrollIntoView(true);

      var Instance = this;
      setTimeout(function(){OnError(Instance);}, window.eventTimeout);
    }
    Object.defineProperty(this, "print", {
      enumerable: true, get: function(){return print;}, set: Warn
      });

    this.print();

    var _delete = function()
    {
      this.display.remove();
      var Logs = document.getElementById("Logs");
      if(Logs.innerHTML === "")
        Logs.innerHTML = "<p id='BlankLog'>There are no logs yet.</p>";
    }
    Object.defineProperty(this, "delete", {
      enumerable: true, get: function(){return _delete;}, set: Warn
    });
  }

  warning = function(type, content, reference)
  {
    var result;
    if(isValueDefined(content))
    {
      if(isValueDefined(reference) && typeof reference == "object")
        result = `${type.toString()} warning in ${reference.constructor.name} class:<br/>${content.toString().replace(/\n/g, "<br/>")}`;
      else
        result = `${type.toString()} warning:<br/>${content.toString().replace(/\n/g, "<br/>")}`;
    }
    else
      result = `Warning:<br/>${type.toString().replace(/\n/g, "<br/>")}`;

    Object.defineProperty(this, "content", {
      enumerable: true, get: function(){return result}, set: Warn
    });

    Object.defineProperty(this, "toString", {
      enumerable: true, get: function(){return function(){return this.content;};}, set: Warn
    });

    Object.defineProperty(this, "typeOf", {
      enumerable: true, get: function(){return function(){return "Warning";};}, set: Warn
    });

    var print = function()
    {
      var BlankLog = document.getElementById("BlankLog");

      if(BlankLog !== null)
        BlankLog.remove();

      var Logs = document.getElementById("Logs");

      var display = document.createElement("div");
      try
      {
        Object.defineProperty(this, "display", {
          enumerable: true, get: function(){return display;}, set: Warn
        });
      }
      catch(error)
      {
        display.remove();
        new Exception("Double call", "Cannot call function 'print' after it was already called once.");
        return;
      }
      Logs.appendChild(this.display);
      display.className = "WarnLog";

      var Icon = document.createElement("img");
      display.appendChild(Icon);
      Icon.src = "../Assets/Images/YellowWarning.png";

      var P = document.createElement("p");
      display.appendChild(P);
      P.innerHTML = this.content.toString();

      display.scrollIntoView(true);

      var Instance = this;
      setTimeout(function(){OnError(Instance);}, window.eventTimeout);
    }
    Object.defineProperty(this, "print", {
      enumerable: true, get: function(){return print;}, set: Warn
    });

    this.print();

    var _delete = function()
    {
      this.display.remove();
      var Logs = document.getElementById("Logs");
      if(Logs.innerHTML === "")
        Logs.innerHTML = "<p id='BlankLog'>There are no logs yet.</p>";
    }
    Object.defineProperty(this, "delete", {
      enumerable: true, get: function(){return _delete;}, set: Warn
    });
  }

  log = function(content, color, scroll, url)
  {
    var isValid = true;
    Object.defineProperty(this, "isValid", {
      enumerable: true, get: function(){return isValid;}, set: function(v){
        if(key)
          isValid = v;
        else
          Warn();
      }
    });
    if(isValueDefined(content))
      Object.defineProperty(this, "content", {
        enumerable: true, get: function(){return content.toString().replace(/\n/g, "<br/>");}, set: function(v){
          if(key)
            content = v;
          else
            Warn();
        }
      });
    else
      new Exception("Invalid value", "Passed value 'content' is not a valid value.", this);
    if(!isValueDefined(color))
      color = "white";
    Object.defineProperty(this, "color", {
        enumerable: true, get: function(){return color.toString();}, set: function(v){
          if(key)
            color = v;
          else
            Warn();
        }
      });
    if(!isValueDefined(scroll))
      scroll = true;
    if(typeof scroll == "boolean")
      Object.defineProperty(this, "scroll", {
        enumerable: true, get: function(){return scroll;}, set: function(v){
          if(key)
            scroll = v;
          else
            Warn();
        }
      });
    else
      new Exception("Unexpected value", "Passed value 'scroll' is not a bool.", this);
    if(!isValueDefined(url))
      url = "";
    Object.defineProperty(this, "url", {
      enumerable: true, get: function(){return url.toString();}, set: function(v){
        if(key)
          url = v;
        else
          Warn();
      }
    });

    Object.defineProperty(this, "toString", {
      enumerable: true, get: function(){return function(){return this.content;};}, set: Warn
    });

    Object.defineProperty(this, "typeOf", {
      enumerable: true, get: function(){return function(){
        if(this.isValid)
          return "Log";
        else
          return "<a style='color:red;'>[Log]</a>";
      };}, set: Warn
    });

    var print = function()
    {
      if(!this.isValid)
      {
        new Exception("Invalid value", "Cannot print the object because this instance is invalid.", this);
        return;
      }

      var BlankLog = document.getElementById("BlankLog");

      if(BlankLog !== null)
        BlankLog.remove();

      var Logs = document.getElementById("Logs");

      var display = document.createElement("div");
      try
      {
        Object.defineProperty(this, "display", {
          enumerable: true, get: function(){return display;}, set: Warn
        });
      }
      catch(error)
      {
        display.remove();
        new Exception("Double call", "Cannot call function 'print' after it was already called once.");
        return;
      }
      Logs.appendChild(this.display);
      display.className = "Log";
      display.style.borderLeft = "2px solid " + this.color;


      if(this.url !== "")
      {
        var icon = document.createElement("img");
        Object.defineProperty(this, "icon", {
          enumerable: true, get: function(){return icon;}, set: function(v){
            if(key)
              icon = v;
            else
              Warn();
          }
        });
        display.appendChild(icon);
        icon.src = this.url;
      }

      var text = document.createElement("p");
      Object.defineProperty(this, "text", {
        enumerable: true, get: function(){return text;}, set: Warn
      });
      display.appendChild(text);
      text.style.color = this.color;
      text.innerHTML = this.content;

      if(this.scroll)
        display.scrollIntoView();

      var Instance = this;
      setTimeout(function(){OnMessage(Instance);}, window.eventTimeout);
    }
    Object.defineProperty(this, "print", {
      enumerable: true, get: function(){return print;}, set: Warn
    });

    if(this.isValid)
      this.print();

    var edit = function(content)
    {
      if(this.isValid)
      {
        key = true;
        this.content = content;
        key = false;
        this.text.innerHTML = content.toString().replace(/\n/g, "<br/>");
      }
      else
        new Exception("Invalid value", "Cannot edit this instance of Log because it is invalid.", this);
    }
    Object.defineProperty(this, "edit", {
      enumerable: true, get: function(){return edit;}, set: Warn
    });

    var setColor = function(color)
    {
      if(this.isValid)
      {
        key = true;
        this.color = color;
        key = false;
        this.text.style.color = color;
        this.display.style.borderLeft = "2px solid " + color;
      }
      else
        new Exception("Invalid value", "Cannot change the color of this instance of Log because it is invalid.", this);
    }
    Object.defineProperty(this, "setColor", {
      enumerable: true, get: function(){return setColor;}, set: Warn
    });

    var setImage = function(url)
    {
      if(this.isValid)
      {
        if(this.url === "")
        {
          key = true;
          var display = this.display;
          var text = this.text;
          display.innerHTML = "";

          var icon = document.createElement("img");
          Object.defineProperty(this, "icon", {
            enumerable: true, get: function(){return icon;}, set: function(v){
              if(key)
                icon = v;
              else
                Warn();
            }
          });
          display.appendChild(icon);

          text = document.createElement("p");
          display.appendChild(text);
          text.style.color = this.color;
          text.innerHTML = this.content;
          key = false;
        }

        key = true;
        this.url = url;
        this.icon.src = url;
        key = false;
      }
      else
        new Exception("Invalid value", "Cannot change the image of this instance of Log because it is invalid.", this);
    }
    Object.defineProperty(this, "setImage", {
      enumerable: true, get: function(){return setImage;}, set: Warn
    });

    var _delete = function()
    {
      this.display.remove();
      key = true;
      this.isValid = false;
      key = false;
      var Logs = document.getElementById("Logs");
      if(Logs.innerHTML === "")
        Logs.innerHTML = "<p id='BlankLog'>There are no logs yet.</p>";
    }
    Object.defineProperty(this, "delete", {
      enumerable: true, get: function(){return _delete;}, set: Warn
    });
  }

  inputlog = function(type, header, addition)
  {
    var isValid = true;
    Object.defineProperty(this, "isValid", {
      enumerable: true, get: function(){return isValid;}, set: function(v){
        if(key)
          isValid = v;
        else
          Warn();
      }
    });

    if(type.toString().toLowerCase() == "button" || type.toString().toLowerCase() == "reset")
      type = "submit";
    if(isValueDefined(type))
      Object.defineProperty(this, "type", {
        enumerable: true, get: function(){return type.toString().toLowerCase();}, set: Warn
      });
    else
      new Exception("Invalid value", "Passed value 'type' returned undefined!", this);

    if(isValueDefined(header))
      Object.defineProperty(this, "header", {
        enumerable: true, get: function(){return header.toString().replace(/\n/g, "<br/>");}, set: Warn
      });
    else
    {
      Object.defineProperty(this, "header", {
        enumerable: true, get: function(){return "Input request";}, set: Warn
      });
    }

    if(isValueDefined(addition))
      Object.defineProperty(this, "addition", {
        enumerable: true, get: function(){return addition;}, set: Warn
      });
    else
      Object.defineProperty(this, "addition", {
        enumerable: true, get: function(){return "";}, set: Warn
      });

      Object.defineProperty(this, "toString", {
        enumerable: true, get: function(){return function(){return this.header;};}, set: Warn
      });

      Object.defineProperty(this, "typeOf", {
        enumerable: true, get: function(){return function()
        {
          if(this.isValid)
            return "InputLog";
          else
            return "<a style='color:red;'>[InputLog]</a>";
        };}, set: Warn
      });

    var populateData = function()
    {

      var data = {};
      if(this.type == "file")
        data = {
          "file": this.input.files[0],
          "filePath": this.input.value,
          "fileName": this.input.value.split("\\").pop(),
          "fileExt": this.input.value.split("\\").pop().split(".").pop(),
          "lastModified": this.input.files[0].lastModified
        };
      else if(this.type == "submit")
      {
        var current = new Date();
        data = {
          "date": current.getFullYear() + "-" + (current.getMonth()+1) + "-" + current.getDate(),
          "time": current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds(),
          "year": current.getFullYear(),
          "month": current.getMonth(),
          "date": current.getDate(),
          "hours": current.getHours(),
          "minutes": current.getMinutes(),
          "seconds": current.getSeconds()
        };
      }
      else if(this.type == "checkbox" || this.type == "radio")
        data.checked = this.input.checked;
      else if(this.type == "color")
        data = {
          "hex": this.input.value,
          "rgb": "rgb(" + parseInt("0x" + this.input.value.slice(1,3)) + ", " + parseInt("0x" + this.input.value.slice(3,5)) + ", " + parseInt("0x" + this.input.value.slice(5,7)) + ")",
          "red": parseInt("0x" + this.input.value.slice(1,3)),
          "green": parseInt("0x" + this.input.value.slice(3,5)),
          "blue": parseInt("0x" + this.input.value.slice(5,7))
        };
      else if(this.type == "date")
        data = {
          "date": this.input.value,
          "year": this.input.value.split("-")[0],
          "month": this.input.value.split("-")[1],
          "day": this.input.value.split("-")[2]
        };
      else if(this.type == "email" || this.type == "number" || this.type == "password" || this.type == "range" || this.type == "search" || this.type == "text" || this.type == "url")
        data.value = this.input.value;
      else if(this.type == "time")
        data = {
          "time": this.input.value,
          "hours": this.input.value.split(":")[0],
          "minutes": this.input.value.split(":")[1]
        };
      data.dataType = this.type;

      try
      {
        Object.defineProperty(this, "data", {
            enumerable: true, get: function(){return Object.freeze(data);}, set: Warn
          });
      }
      catch(error)
      {
        new Exception("Double call", "Cannot call function 'populateData' after it was already called once.");
        return;
      }
    }
    Object.defineProperty(this, "populateData", {
      enumerable: true, get: function(){if(key)return populateData;else Warn;}, set: Warn
    });

    var checkValidity = function()
    {
      if(this.type != "file" || this.addition == "")
        return true;

      const validExts = this.addition.replace(".", "").split(",");

      for(var i in validExts)
        if(this.input.value.split("\\").pop().split(".").pop() == validExts[i])
          return true;

      return false;
    }
    Object.defineProperty(this, "checkValidity", {
      enumerable: true, get: function(){return checkValidity;}, set: Warn
    });

    this.onsubmit = function(data){};

    var setColor = function(color)
    {
      this.text.style.color = color;
      this.display.style.borderLeft = "2px solid " + color;
      this.input.style.color = color;
      this.submit.style.color = color;
      this.submit.style.borderColor = color;
    }
    Object.defineProperty(this, "setColor", {
      enumerable: true, get: function(){return setColor;}, set: Warn
    });

    var _delete = function()
    {
      this.display.remove();
      key = true;
      this.isValid = false;
      key = false;
      var Logs = document.getElementById("Logs");
      if(Logs.innerHTML.replace(/\n/g, "").replace(/ /g, "") === "")
        Logs.innerHTML = "<p id='BlankLog'>There are no logs yet.</p>";
    }
    Object.defineProperty(this, "delete", {
      enumerable: true, get: function(){return _delete;}, set: Warn
    });

    var print = function()
    {
      if(!this.isValid)
      {
        new Exception("Invalid value", "Cannot print the object because this instance is invalid.", this);
        return;
      }

      var Instance = this;

      var HasSubmit = true;

      var BlankLog = document.getElementById("BlankLog");

      if(BlankLog !== null)
        BlankLog.remove();

      var Logs = document.getElementById("Logs");

      var display = document.createElement("form");
      try
      {
        Object.defineProperty(this, "display", {
          enumerable: true, get: function(){return display;}, set: Warn
        });
      }
      catch(error)
      {
        display.remove();
        new Exception("Double call", "Cannot call function 'print' after it was already called once.");
        return;
      }
      Logs.appendChild(display);
      display.className = "Log";
      display.style.borderLeft = "2px solid darkgrey";

      display.onsubmit = function()
      {
        try
        {
          if(Instance.checkValidity())
          {
            key = true;
            Instance.populateData();
            key = false;
            Instance.delete();
            Instance.onsubmit(Instance.data);
          }
          else
            new Exception("invalid filetype", `Extension .${Instance.input.value.split("\\").pop().split(".").pop()} does not match any accepted extensions.\nAccepted extensions: ${Instance.addition}`);
          return false;
        }
        catch(error)
        {
          alert(error);
        }
      };

      var icon = document.createElement("img");
      display.appendChild(icon);
      icon.src = "../Assets/Images/Gear.png";

      var text = document.createElement("p");
      Object.defineProperty(this, "text", {
        enumerable: true, get: function(){return text;}, set: Warn
      });
      display.appendChild(text);
      text.style.color = "darkgrey";
      text.innerHTML = this.header;

      var input = document.createElement("input");
      Object.defineProperty(this, "input", {
        enumerable: true, get: function(){return input;}, set: Warn
      });
      display.appendChild(input);
      input.style.fontFamily = "Prompt";
      input.style.color = "darkgrey";
      input.type = this.type;
      input.required = true;

      if(this.type == "file")
        input.accept = this.addition;
      else if(this.type == "submit")
      {
        input.required = false;
        input.style.display = "block";
        if(this.addition !== "")
          input.value = this.addition;
        else
          input.value = "button";
        HasSubmit = false;
      }
      else if(this.type == "checkbox" || this.type == "radio")
        input.required = false;
      else if(this.type == "color")
        input.onchange = function(){Instance.setColor(input.value);};

      if(HasSubmit)
      {
        var submit = document.createElement("input");
        Object.defineProperty(this, "submit", {
          enumerable: true, get: function(){return submit;}, set: function(v){new Warning("Protection level", "Cannot set property due to its protection level.");}
        });
        display.appendChild(submit);
        submit.style.fontFamily = "Prompt";
        submit.style.color = "darkgrey";
        submit.style.backgroundColor = "grey";
        submit.style.border = "2px solid darkgrey";
        submit.style.borderRadius = "3px";
        submit.type = "submit";
      }

      display.scrollIntoView(true);

      setTimeout(function(){OnMessage(Instance);}, window.eventTimeout);
    }
    Object.defineProperty(this, "print", {
      enumerable: true, get: function(){return print;}, set: Warn
    });

    if(this.isValid)
      this.print();
  }

  popup = function(header, callback = function(result){}, options = ["yes", "no"], img, color = "white")
  {
    var isValid = true;
    Object.defineProperty(this, "isValid", {
      enumerable: true, get: function(){return isValid;}, set: function(v){
        if(key)
          isValid = v;
        else
          Warn();
      }
    });

    if(isValueDefined(header))
      Object.defineProperty(this, "header", {
        enumerable: true, get: function(){return header.toString().replace(/\n/g, "<br/>");}, set: Warn
      });
    else
      new Exception("Invalid value", "Passed value 'header' returned undefined!", this);

    try
    {
      if(options.length > 0)
        Object.defineProperty(this, "options", {
            enumerable: true, get: function(){return options;}, set: Warn
          });
      else
      {
        new Exception("Invalid value", "Passed value 'options' has a length of 0.", this);
        return;
      }
    }
    catch(error)
    {
      new Exception("Unexpected value", "Passed value 'options' was not an instance of Array.", this);
      return;
    }

    Object.defineProperty(this, "callback", {
      enumerable: true, get: function(){return callback;}, set: Warn
    });
    Object.defineProperty(this, "img", {
      enumerable: true, get: function(){return img;}, set: Warn
    });
    Object.defineProperty(this, "color", {
      enumerable: true, get: function(){return color;}, set: Warn
    });

    Object.defineProperty(this, "toString", {
      enumerable: true, get: function(){return function(){return this.header;};}, set: Warn
    });

    Object.defineProperty(this, "typeOf", {
      enumerable: true, get: function(){return function()
      {
        if(this.isValid)
          return "Popup";
        else
          return "<a style='color:red;'>[Popup]</a>";
      };}, set: Warn
    });

    var _delete = function()
    {
      this.background.remove();
      key = true;
      this.isValid = false;
      key = false;
    }
    Object.defineProperty(this, "delete", {
      enumerable: true, get: function(){return _delete;}, set: Warn
    });

    var init = function()
    {
      if(!this.isValid)
      {
        new Exception("Invalid value", "Cannot initialize the object because this instance is invalid.", this);
        return;
      }

      var Instance = this;

      var background = document.createElement("div");
      Object.defineProperty(this, "background", {
        enumerable: true, get: function(){return background;}, set: Warn
      });
      background.style.position = "absolute";
      background.style.left = 0;
      background.style.bottom = 0;
      background.style.width = window.innerWidth;
      background.style.height = window.innerHeight;
      background.style.backgroundColor = "rgba(255, 255, 255, 0.25)";

      var display = document.createElement("div");
      Object.defineProperty(this, "display", {
        enumerable: true, get: function(){return display;}, set: Warn
      });
      background.appendChild(display);
      display.style.margin = "200px auto auto";
      display.style.padding = 10;
      display.style.width = 300;
      display.style.textAlign = "center";
      display.style.fontFamily = "Prompt";
      display.style.backgroundColor = this.color;
      display.style.borderRadius = "10px";
      display.style.opacity = 0;
      display.style.transition = "opacity 0.25s ease";
      setTimeout(function(){
        document.body.appendChild(Instance.background);
        Instance.display.style.opacity = 1;
      }, 50);

      if(isValueDefined(this.img))
      {
        var icon = document.createElement("img");
        Object.defineProperty(this, "icon", {
          enumerable: true, get: function(){return icon;}, set: Warn
        });
        display.appendChild(icon);
        icon.style.width = 32;
        icon.style.height = 32;
        icon.style.margin = "auto";
        icon.style.display = "block";
        icon.src = this.img;
      }

      var text = document.createElement("p");
      Object.defineProperty(this, "text", {
        enumerable: true, get: function(){return text;}, set: Warn
      });
      display.appendChild(text);
      text.style.margin = "10px";
      text.innerHTML = this.header;

      for(var i = 0; i < this.options.length; i++)
      {
        var input = document.createElement("input");
        this.display.appendChild(input);
        input.style.margin = 10;
        input.type = "button";
        input.value = this.options[i];
        input.id = "popup_select";
      }

      var popupUpdate = setInterval(function(){
        if(window.lastClicked.id == "popup_select")
        {
          try
          {
            Instance.callback(window.lastClicked.value);
          }
          catch(error)
          {
            new Exception("Invalid value", "Passed value 'callback' was not a function!", Instance);
          }
          Instance.delete();
          clearInterval(popupUpdate);
          return;
        }
      }, 0);
    }
    Object.defineProperty(this, "init", {
      enumerable: true, get: function(){return init;}, set: Warn
    });

    if(this.isValid)
      this.init();
  }

  //Data objects
  dir2d = function(val = "none")
  {
    var isValid = true;
    Object.defineProperty(this, "isValid", {
      enumerable: true, get: function(){return isValid;}, set: function(v){
        if(key)
          isValid = v;
        else
          Warn();
      }
    });

    if(typeof val == "string" &&
      (val.toLowerCase() == "none" || val.toLowerCase() == "left" || val.toLowerCase() == "up" || val.toLowerCase() == "right" || val.toLowerCase() == "down"))
    {
      Object.defineProperty(this, "value", {
        enumerable: true, get: function(){return val.toLowerCase();}, set: function(v){
          if(key)
            if(typeof v == "string" &&
              (v.toLowerCase() == "none" || v.toLowerCase() == "left" || v.toLowerCase() == "up" || v.toLowerCase() == "right" || v.toLowerCase() == "down"))
              val = v;
            else
              new Exception("Unexpected value", "Passed value 'v' is not a valid direction.");
          else
            Warn();
        }
      });
      var result;
      if(this.value == "up" || this.value == "down")
        result = "vertical";
      else if(this.value == "left" || this.value == "right")
        result = "horizontal";
      else
        result = "none";
      Object.defineProperty(this, "axis", {
        enumerable: true, get: function(){return result;}, set: function(v){
          if(key)
            if(typeof v == "string" &&
              (v.toLowerCase() == "none" || v.toLowerCase() == "horizontal" || v.toLowerCase() == "vertical"))
              val = v;
            else
            {
              new Exception("Unexpected value", "Passed value 'v' is not a valid axis.");
              return;
            }
          else
            Warn();
        }
      });
    }
    else
    {
      Object.defineProperty(this, "value", {
        enumerable: true, get: function(){return "none";}, set: Warn
      });
      new Exception("Unexpected value", `Passed value 'val' was not a valid direction.\nValue: '${val}'`, this);
    }

    Object.defineProperty(this, "toString", {
      enumerable: true, get: function(){return function(){return this.value;};}, set: Warn
    });

    Object.defineProperty(this, "typeOf", {
      enumerable: true, get: function(){return function()
      {
        if(this.isValid)
          return "Dir2D";
        else
          return "<a style='color:red;'>[Dir2D]</a>";
      };}, set: Warn
    });

    var _new = function()
    {
      if(this.isValid)
        return new Dir2D(this.value);
      else
      {
        new Exception("Invalid value", "Cannot create a new instance of Dir2D because this instance of Dir2D was invalid.");
        return null;
      }
    }
    Object.defineProperty(this, "new", {
      enumerable: true, get: function(){return _new;}, set: Warn
    });

    var equals = function(dir)
    {
      if(dir.valueOf() == "Dir2D")
      {
        if(this.isValid && dir.isValid)
          return this.value == dir.value;
        else
        {
          new Exception("Invalid value", "Dir2D cannot compare with the passed value either because the passed value was invalid or because this instance of Dir2D was invalid.");
          return false;
        }
      }
      else if(typeof dir == "string")
      {
        if(this.isValid)
          return this.value == dir.toLowerCase();
        else
        {
          new Exception("Invalid value", "Dir2D cannot compare with the passed value because this instance of Dir2D was invalid.", this);
          return false;
        }
      }
      else
      {
        new Exception("Unexpected value", "Dir2D cannot compare with the passed value because the value wasn't a value of type Dir2D nor a value of type string.\nValue type: " + typeof Dir);
        return false;
      }
    }
    Object.defineProperty(this, "equals", {
      enumerable: true, get: function(){return equals;}, set: Warn
    });

    var invert = function()
    {
      if(this.isValid)
      {
        if(this.value == "none")
          return new Dir2D("none");
        else if (this.value == "left")
          return new Dir2D("right");
        else if(this.value == "up")
          return new Dir2D("down");
        else if(this.value == "right")
          return new Dir2D("left");
        else if(this.value == "down")
          return new Dir2D("up");
      }
      else
      {
        new Exception("Invalid value", "Cannot invert Dir2D because this instance of Dir2D was invalid.", this);
        return null;
      }
    }
    Object.defineProperty(this, "invert", {
      enumerable: true, get: function(){return invert;}, set: Warn
    });

    var toVector2 = function()
    {
      if(this.isValid)
      {
        if(this.value == "none")
          return new Vector2();
        else if (this.value == "left")
          return new Vector2(-1, 0);
        else if(this.value == "up")
          return new Vector2(0, 1);
        else if(this.value == "right")
          return new Vector2(1, 0);
        else if(this.value == "down")
          return new Vector2(0, -1);
      }
      else
      {
        new Exception("Invalid value", "Cannot parse Dir2D to Vector2 because this instance of Dir2D was invalid.", this);
        return null;
      }
    }
    Object.defineProperty(this, "toVector2", {
      enumerable: true, get: function(){return toVector2;}, set: Warn
    });

    var toDeg = function()
    {
      if(this.isValid)
      {
        if(this.value == "none")
          return null;
        else if (this.value == "left")
          return -90;
        else if(this.value == "up")
          return 0;
        else if(this.value == "right")
          return 90;
        else if(this.value == "down")
          return 180;
      }
      else
      {
        new Exception("Invalid value", "Cannot parse Dir2D to degrees because this instance of Dir2D was invalid.", this);
        return null;
      }
    }
    Object.defineProperty(this, "toDeg", {
      enumerable: true, get: function(){return toDeg;}, set: Warn
    });
  }
  Object.defineProperty(dir2d, "none", {
    enumerable: true, get: function(){return new Dir2D("none");}, set: Warn
  });
  Object.defineProperty(dir2d, "up", {
    enumerable: true, get: function(){return new Dir2D("up");}, set: Warn
  });
  Object.defineProperty(dir2d, "down", {
    enumerable: true, get: function(){return new Dir2D("down");}, set: Warn
  });
  Object.defineProperty(dir2d, "left", {
    enumerable: true, get: function(){return new Dir2D("left");}, set: Warn
  });
  Object.defineProperty(dir2d, "right", {
    enumerable: true, get: function(){return new Dir2D("right");}, set: Warn
  });

  vector2 = function(x = 0, y = 0)
  {
    var isValid = true;
    Object.defineProperty(this, "isValid", {
      enumerable: true, get: function(){return isValid;}, set: function(v){
        if(key)
          isValid = v;
        else
          Warn();
      }
    });

    if(isValueDefined(x) && typeof x == "number")
      Object.defineProperty(this, "x", {
        enumerable: true, get: function(){return x;}, set: function(v){
          if(isValueDefined(v) && typeof v == "number")
            x = v;
          else
            new Exception("Unexpected value", "Passed value 'v' was not a number.");
        }
      });
    else
    {
      Object.defineProperty(this, "x", {
        enumerable: true, get: function(){return NaN;}, set: Warn
      });
      new Exception("Unexpected value", "Passed value 'x' was not a number.", this);
    }

    if(isValueDefined(y) && typeof y == "number")
      Object.defineProperty(this, "y", {
        enumerable: true, get: function(){return y;}, set: function(v){
          if(isValueDefined(v) && typeof v == "number")
            y = v;
          else
            new Exception("Unexpected value", "Passed value 'v' was not a number.");
        }
      });
    else
    {
      Object.defineProperty(this, "y", {
        enumerable: true, get: function(){return NaN;}, set: Warn
      });
      new Exception("Unexpected value", "Passed value 'y' was not a number.", this);
    }

    Object.defineProperty(this, "toString", {
      enumerable: true, get: function(){return function()
        {
          if(this.isValid)
            return `(${this.x}, ${this.y})`;
          else
            return "(NaN, NaN)";
        };}, set: Warn
    });

    Object.defineProperty(this, "typeOf", {
      enumerable: true, get: function(){return function()
      {
        if(this.isValid)
          return "Vector2";
        else
          return "<a style='color:red;'>[Vector2]</a>";
      };}, set: Warn
    });

    var _new = function()
    {
      if(this.isValid)
        return new Vector2(this.x, this.y);
      else
      {
        new Exception("Invalid value", "Cannot create a new instance of Vector2 because this instance of Vector2 was invalid.", this);
        return null;
      }
    }
    Object.defineProperty(this, "new", {
      enumerable: true, get: function(){return _new;}, set: Warn
    });

    var equals = function(other)
    {
      if(isValueDefined(other.typeOf) && other.typeOf() == "Vector2")
      {
        if(this.isValid && other.isValid)
          return (other.x == this.x && other.y == this.y);
        else
        {
          new Exception("Invalid value", "Vector2 cannot compare with the passed value either because the value was invalid or because this instance of Vector2 was invalid.");
          return false;
        }
      }
      else
      {
        new Exception("Unexpected value", "Vector2 cannot compare with the passed value because the value wasn't a value of type Vector2.");
        return false;
      }
    }
    Object.defineProperty(this, "equals", {
      enumerable: true, get: function(){return equals;}, set: Warn
    });

    var add = function(value)
    {
      if(isValueDefined(value.typeOf) && value.typeOf() == "Vector2")
      {
        if(this.isValid && value.isValid)
          return new Vector2(this.x + value.x, this.y + value.y);
        else
        {
          new Exception("Invalid value", "Vector2 cannot make an addition with the passed value either because the value was invalid or because this instance of Vector2 was invalid.");
          return null;
        }
      }
      else if(isValueDefined(value) && typeof value == "number")
      {
        if(this.isValid)
          return new Vector2(this.x + value, this.y + value);
        else
        {
          new Exception("Invalid value", "Vector2 cannot make an addition with the passed value because this instance of Vector2 was invalid.", this);
          return null;
        }
      }
      else
      {
        new Exception("Unexpected value", "Vector2 cannot make an addition with the passed value because the value wasn't a value of type Vector2 nor a value of type number.");
        return null;
      }
    }
    Object.defineProperty(this, "add", {
      enumerable: true, get: function(){return add;}, set: Warn
    });

    var sub = function(value)
    {
      if(isValueDefined(value.typeOf) && value.typeOf() == "Vector2")
      {
        if(this.isValid && value.isValid)
          return new Vector2(this.x - value.x, this.y - value.y);
        else
        {
          new Exception("Invalid value", "Vector2 cannot make an substraction with the passed value either because the value was invalid or because this instance of Vector2 was invalid.");
          return null;
        }
      }
      else if(isValueDefined(value) && typeof value == "number")
      {
        if(this.isValid)
          return new Vector2(this.x - value, this.y - value);
        else
        {
          new Exception("Invalid value", "Vector2 cannot make an substraction with the passed value because this instance of Vector2 was invalid.", this);
          return null;
        }
      }
      else
      {
        new Exception("Unexpected value", "Vector2 cannot make an substraction with the passed value because the value wasn't a value of type Vector2 nor a value of type number.");
        return null;
      }
    }
    Object.defineProperty(this, "sub", {
      enumerable: true, get: function(){return sub;}, set: Warn
    });

    var multi = function(value)
    {
      if(isValueDefined(value.typeOf) && value.typeOf() == "Vector2")
      {
        if(this.isValid && value.isValid)
          return new Vector2(this.x * value.x, this.y * value.y);
        else
        {
          new Exception("Invalid value", "Vector2 cannot make an multiplication with the passed value either because the value was invalid or because this instance of Vector2 was invalid.");
          return null;
        }
      }
      else if(isValueDefined(value) && typeof value == "number")
      {
        if(this.isValid)
          return new Vector2(this.x * value, this.y * value);
        else
        {
          new Exception("Invalid value", "Vector2 cannot make an multiplication with the passed value because this instance of Vector2 was invalid.", this);
          return null;
        }
      }
      else
      {
        new Exception("Unexpected value", "Vector2 cannot make an multiplication with the passed value because the value wasn't a value of type Vector2 nor a value of type number.");
        return null;
      }
    }
    Object.defineProperty(this, "multi", {
      enumerable: true, get: function(){return multi;}, set: Warn
    });

    var div = function(value)
    {
      if(isValueDefined(value.typeOf) && value.typeOf() == "Vector2")
      {
        if(this.isValid && value.isValid)
          return new Vector2(this.x / value.x, this.y / value.y);
        else
        {
          new Exception("Invalid value", "Vector2 cannot divide with the passed value either because the value was invalid or because this instance of Vector2 was invalid.");
          return null;
        }
      }
      else if(isValueDefined(value) && typeof value == "number")
      {
        if(this.isValid)
          return new Vector2(this.x / value, this.y / value);
        else
        {
          new Exception("Invalid value", "Vector2 cannot divide with the passed value because this instance of Vector2 was invalid.", this);
          return null;
        }
      }
      else
      {
        new Exception("Invalid value", "Vector2 cannot divide with the passed value because the value wasn't a value of type Vector2 nor a value of type number.");
        return null;
      }
    }
    Object.defineProperty(this, "div", {
      enumerable: true, get: function(){return div;}, set: Warn
    });

    var dist = function(other)
    {
      if(isValueDefined(other.typeOf) && other.typeOf() == "Vector2")
      {
        if(this.isValid && other.isValid)
        {
          var thirdPoint = new Vector2(this.x, other.y);
          var a = Math.abs(thirdPoint.x - other.x);
          var b = Math.abs(thirdPoint.y - this.y);
          var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
          return c;
        }
        else
        {
          new Exception("Invalid value", "Vector2 cannot calculate distance with the passed value either because the value was invalid or because this instance of Vector2 was invalid.");
          return null;
        }
      }
      else
      {
        new Exception("Unexpected value", "Vector2 cannot calculate distance with the value because is wasn't a value of type Vector2.");
        return null;
      }
    }
    Object.defineProperty(this, "dist", {
      enumerable: true, get: function(){return dist;}, set: Warn
    });

    var lerp = function(other, dist)
    {
      if(isValueDefined(other.typeOf) && other.typeOf() == "Vector2")
      {
        if(typeof dist == "number")
        {
          if(this.isValid && other.isValid)
          {
            var x = other.x - this.x;
            var y = other.y - this.y;
            return this.add(new Vector2(x, y).multi(dist));
          }
          else
          {
            new Exception("Invalid value", "Vector2 cannot calculate distance with the passed value either because the value was invalid or because this instance of Vector2 was invalid.");
            return null;
          }
        }
        else
          new Exception("Unexpected value", "Vector2 cannot lerp because the passed value 'dist' was not a number.");
      }
      else
        new Exception("Unexpected value", "Vector2 cannot lerp with the passed value because the value wasn't a value of type Vector2.");
    }
    Object.defineProperty(this, "lerp", {
      enumerable: true, get: function(){return lerp;}, set: Warn
    });
  }
  Object.defineProperty(vector2, "one", {
    enumerable: true, get: function(){return new Vector2(1, 1);}, set: Warn
  });
  Object.defineProperty(vector2, "up", {
    enumerable: true, get: function(){return new Vector2(0, 1);}, set: Warn
  });
  Object.defineProperty(vector2, "right", {
    enumerable: true, get: function(){return new Vector2(1, 0);}, set: Warn
  });
  Object.defineProperty(vector2, "zero", {
    enumerable: true, get: function(){return new Vector2();}, set: Warn
  });

  vector3 = function(x = 0, y = 0, z = 0)
  {
    var isValid = true;
    Object.defineProperty(this, "isValid", {
      enumerable: true, get: function(){return isValid;}, set: function(v){
        if(key)
          isValid = v;
        else
          Warn();
      }
    });

    if(isValueDefined(x) && typeof x == "number")
      Object.defineProperty(this, "x", {
        enumerable: true, get: function(){return x;}, set: function(v){
          if(isValueDefined(v) && typeof v == "number")
            x = v;
          else
            new Exception("Unexpected value", "Passed value 'v' was not a number.");
        }
      });
    else
    {
      Object.defineProperty(this, "x", {
        enumerable: true, get: function(){return NaN;}, set: Warn
      });
      new Exception("Unexpected value", "Passed value 'x' was not a number.", this);
    }

    if(isValueDefined(y) && typeof y == "number")
      Object.defineProperty(this, "y", {
        enumerable: true, get: function(){return y;}, set: function(v){
          if(isValueDefined(v) && typeof v == "number")
            y = v;
          else
            new Exception("Unexpected value", "Passed value 'v' was not a number.");
        }
      });
    else
    {
      Object.defineProperty(this, "y", {
        enumerable: true, get: function(){return NaN;}, set: Warn
      });
      new Exception("Unexpected value", "Passed value 'y' was not a number.", this);
    }

    if(isValueDefined(z) && typeof z == "number")
      Object.defineProperty(this, "z", {
        enumerable: true, get: function(){return z;}, set: function(v){
          if(isValueDefined(v) && typeof v == "number")
            z = v;
          else
            new Exception("Unexpected value", "Passed value 'v' was not a number.");
        }
      });
    else
    {
      Object.defineProperty(this, "z", {
        enumerable: true, get: function(){return NaN;}, set: Warn
      });
      new Exception("Unexpected value", "Passed value 'z' was not a number.", this);
    }

    Object.defineProperty(this, "toString", {
      enumerable: true, get: function(){return function()
        {
          if(this.isValid)
            return `(${this.x}, ${this.y}, ${this.z})`;
          else
            return "(NaN, NaN, NaN)";
        };}, set: Warn
    });

    Object.defineProperty(this, "typeOf", {
      enumerable: true, get: function(){return function()
        {
          if(this.isValid)
            return "Vector3";
          else
            return "<a style='color:red;'>[Vector3]</a>";
        };}, set: Warn
    });

    var _new = function()
    {
      if(this.isValid)
        return new Vector3(this.x, this.y, this.z);
      else
      {
        new Exception("Invalid value", "Cannot create a new instance of Vector3 because this instance of Vector3 was invalid.", this);
        return null;
      }
    }
    Object.defineProperty(this, "new", {
      enumerable: true, get: function(){return _new;}, set: Warn
    });

    var equals = function(other)
    {
      if(other.valueOf() == "Vector3")
      {
        if(this.isValid && other.isValid)
          return (other.x == this.x && other.y == this.y && other.z == this.z);
        else
        {
          new Exception("Invalid value", "Vector3 cannot compare with the passed value either because the value was invalid or because this instance of Vector3 was invalid.");
          return false;
        }
      }
      else
      {
        new Exception("Unexpected value", "Vector3 cannot compare with the passed value because the value wasn't a value of type Vector3.");
        return false;
      }
    }
    Object.defineProperty(this, "equals", {
      enumerable: true, get: function(){return equals;}, set: Warn
    });

    var add = function(value)
    {
      if(value.valueOf() == "Vector3")
      {
        if(this.isValid && value.isValid)
          return new Vector3(this.x + value.x, this.y + value.y, this.z + value.z);
        else
        {
          new Exception("Invalid value", "Vector3 cannot make an addition with the passed value either because the value was invalid or because this instance of Vector3 was invalid.");
          return null;
        }
      }
      else if(isValueDefined(value) && typeof value == "number")
      {
        if(this.isValid)
          return new Vector3(this.x + value, this.y + value, this.z + value);
        else
        {
          new Exception("Invalid value", "Vector3 cannot make an addition with the passed value because this instance of Vector3 was invalid.", this);
          return null;
        }
      }
      else
      {
        new Exception("Unexpected value", "Vector3 cannot make an addition with the passed value because the value wasn't a value of type Vector3 nor a value of type number.");
        return null;
      }
    }
    Object.defineProperty(this, "add", {
      enumerable: true, get: function(){return add;}, set: Warn
    });

    var sub = function(value)
    {
      if(value.valueOf() == "Vector3")
      {
        if(this.isValid && value.isValid)
          return new Vector2(this.x - value.x, this.y - value.y, this.z - value.z);
        else
        {
          new Exception("Invalid value", "Vector3 cannot make an substraction with the passed value either because the value was invalid or because this instance of Vector3 was invalid.");
          return null;
        }
      }
      else if(isValueDefined(value) && typeof value == "number")
      {
        if(this.isValid)
          return new Vector2(this.x - value, this.y - value, this.z - value);
        else
        {
          new Exception("Invalid value", "Vector3 cannot make an substraction with the passed value because this instance of Vector3 was invalid.", this);
          return null;
        }
      }
      else
      {
        new Exception("Unexpected value", "Vector3 cannot make an substraction with the passed value because the value wasn't a value of type Vector3 nor a value of type number.");
        return null;
      }
    }
    Object.defineProperty(this, "sub", {
      enumerable: true, get: function(){return sub;}, set: Warn
    });

    var multi = function(value)
    {
      if(value.valueOf() == "Vector3")
      {
        if(this.isValid && value.isValid)
          return new Vector2(this.x * value.x, this.y * value.y, this.z * value.z);
        else
        {
          new Exception("Invalid value", "Vector3 cannot make an multiplication with the passed value either because the value was invalid or because this instance of Vector3 was invalid.");
          return null;
        }
      }
      else if(isValueDefined(value) && typeof value == "number")
      {
        if(this.isValid)
          return new Vector2(this.x * value, this.y * value, this.z * value);
        else
        {
          new Exception("Invalid value", "Vector3 cannot make an multiplication with the passed value because this instance of Vector3 was invalid.", this);
          return null;
        }
      }
      else
      {
        new Exception("Unexpected value", "Vector3 cannot make an multiplication with the passed value because the value wasn't a value of type Vector3 nor a value of type number.");
        return null;
      }
    }
    Object.defineProperty(this, "multi", {
      enumerable: true, get: function(){return multi;}, set: Warn
    });

    var div = function(value)
    {
      if(value.valueOf() == "Vector3")
      {
        if(this.isValid && value.isValid)
          return new Vector2(this.x / value.x, this.y / value.y, this.z / value.z);
        else
        {
          new Exception("Invalid value", "Vector3 cannot divide with the passed value either because the value was invalid or because this instance of Vector3 was invalid.");
          return null;
        }
      }
      else if(isValueDefined(value) && typeof value == "number")
      {
        if(this.isValid)
          return new Vector2(this.x / value, this.y / value, this.z / value);
        else
        {
          new Exception("Invalid value", "Vector3 cannot divide with the passed value because this instance of Vector3 was invalid.", this);
          return null;
        }
      }
      else
      {
        new Exception("Invalid value", "Vector3 cannot divide with the passed value because the value wasn't a value of type Vector3 nor a value of type number.");
        return null;
      }
    }
    Object.defineProperty(this, "div", {
      enumerable: true, get: function(){return div;}, set: Warn
    });

    var dist = function(other)
    {
      if(other.valueOf() == "Vector3")
      {
        if(this.isValid && other.isValid)
        {
          var thirdPoint = new Vector3(this.x, other.y, other.z);
          var a = Math.abs(thirdPoint.x - other.x);
          var b = Math.abs(thirdPoint.y - this.y);
          var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
          var d = Math.abs(thirdPoint.z - this.z);
          var e = Math.sqrt(Math.pow(c, 2) + Math.pow(d, 2));
          return e;
        }
        else
        {
          new Exception("Invalid value", "Vector3 cannot calculate distance with the passed value either because the value was invalid or because this instance of Vector3 was invalid.");
          return null;
        }
      }
      else
      {
        new Exception("Unexpected value", "Vector3 cannot calculate distance with the passed value because the value wasn't a value of type Vector3.");
        return null;
      }
    }
    Object.defineProperty(this, "dist", {
      enumerable: true, get: function(){return dist;}, set: Warn
    });

    var lerp = function(other, dist)
    {
      if(other.valueOf() == "Vector3")
      {
        if(typeof dist == "number")
        {
          var x = other.x - this.x;
          var y = other.y - this.y;
          var z = other.z - this.z;
          return this.add(new Vector3(x, y, z).multi(dist));
        }
        else
          new Exception("Unexpected value", "Vector3 cannot lerp because the passed value 'dist' was not a number.");
      }
      else
        new Exception("Unexpected value", "Vector3 cannot lerp with the passed value because the value wasn't a value of type Vector3.");
    }
  }
  Object.defineProperty(vector3, "one", {
    enumerable: true, get: function(){return new Vector3(1, 1, 1);}, set: Warn
  });
  Object.defineProperty(vector3, "forward", {
    enumerable: true, get: function(){return new Vector3(0, 0, 1);}, set: Warn
  });
  Object.defineProperty(vector3, "up", {
    enumerable: true, get: function(){return new Vector3(0, 1, 0);}, set: Warn
  });
  Object.defineProperty(vector3, "right", {
    enumerable: true, get: function(){return new Vector3(1, 0, 0);}, set: Warn
  });
  Object.defineProperty(vector3, "zero", {
    enumerable: true, get: function(){return new Vector3();}, set: Warn
  });

  //Canvas object
  canvas = function()
  {
    Object.defineProperty(this, "toString", {
      enumerable: true, get: function(){return function(){return `${window.globalSize.x} by ${window.globalSize.y} Canvas\nLayer: ${this.layer}`;};}, set: Warn
    });

    Object.defineProperty(this, "typeOf", {
      enumerable: true, get: function(){return function(){return "Canvas";};}, set: Warn
    });

    var init = function()
    {
      var display = document.createElement("canvas");
      try
      {
        Object.defineProperty(this, "display", {
          enumerable: true, get: function(){if(key)return display;else return undefined;}, set: Warn
        });
      }
      catch(error)
      {
        new Exception("Double call", "Cannot initialize Canvas instance because it was already initilised.");
        return;
      }
      key = true;
      document.getElementById("Content").appendChild(this.display);
      this.display.width = window.globalSize.x;
      this.display.height = window.globalSize.y;
      var context = this.display.getContext("2d");
      Object.defineProperty(this, "context", {
        enumerable: true, get: function(){return context;}, set: Warn
      });
      key = false;
      var layer = window.canvases.length;
      Object.defineProperty(this, "layer", {
        enumerable: true, get: function(){return layer;}, set: Warn
      });
      key = true;
      window.canvases.push(this);
      key = false;
    }
    Object.defineProperty(this, "init", {
      enumerable: true, get: function(){return init;}, set: Warn
    });

    this.init();

    var update = function()
    {
      key = true;
      this.display.width = window.globalSize.x;
      this.display.height = window.globalSize.y;
      key = false;
    }
    Object.defineProperty(this, "update", {
      enumerable: true, get: function(){return update;}, set: Warn
    });

    this.draw = function(ctx){};

    var updateDraw = function()
    {
      key = true;
      this.clear();
      this.draw(this);
      key = false;
    }
    Object.defineProperty(this, "updateDraw", {
      enumerable: true, get: function(){return updateDraw;}, set: Warn
    });

    var clear = function()
    {
      key = true;
      var c = this.display.getContext("2d");
      c.clearRect(0, 0, this.display.width, this.display.height);
      key = false;
    }
    Object.defineProperty(this, "clear", {
      enumerable: true, get: function(){if(key)return clear;else return undefined;}, set: Warn
    });
  }

  //Shape objects
  circle = function(position, width, color = "white")
  {
    var isValid = true;
    Object.defineProperty(this, "isValid", {
      enumerable: true, get: function(){return isValid;}, set: function(v){
        if(key)
          isValid = v;
        else
          Warn();
    }});

    if(isValueDefined(position) && isValueDefined(position.typeOf) && position.typeOf() == "Vector2")
    {
      if(position.isValid)
        Object.defineProperty(this, "position", {
          enumerable: true, get: function(){return position;}, set: function(pos){
            if(isValueDefined(pos) && isValueDefined(pos.typeOf) && pos.typeOf() == "Vector2")
            {
              if(pos.isValid)
                position = pos;
              else
                new Exception("Invalid value", "Passed value 'pos' was not a valid Vector2.", this);
            }
            else
              new Exception("Unexpected value", "Passed value 'pos' was not a Vector2.", this);
          }
        });
      else
        new Exception("Invalid value", "Passed value 'position' was not a valid Vector2.", this);
    }
    else
      new Exception("Unexpected value", "Passed value 'position' was not a Vector2.", this);

    if(isValueDefined(width) && typeof width == "number")
      Object.defineProperty(this, "width", {
        enumerable: true, get: function(){return width;}, set: function(v){
          if(isValueDefined(v) && typeof v == "number")
            width = v;
          else
            new Exception("Unexpected value", "Passed value 'v' was not a number.", this);
        }
      });
    else
      new Exception("Unexpected value", "Passed value 'width' was not a number.", this);
    this.color = color;

    Object.defineProperty(this, "toString", {
      enumerable: true, get: function(){return function()
        {
          if(this.isValid)
            return `${this.width} pixel wide Circle\nColor: ${this.color}\nPosition: ${this.position.toString()}`;
          else
            return "<a style='color:red;'>[Circle]</a>";
        };}, set: Warn
    });

    Object.defineProperty(this, "typeOf", {
      enumerable: true, get: function(){return function()
      {
        if(this.isValid)
          return "Circle";
        else
          return "<a style='color:red;'>[Circle]</a>";
      };}, set: Warn
    });

    var draw = function(canvas)
    {
      if(!isValueDefined(canvas) || !isValueDefined(canvas.typeOf) || canvas.typeOf() != "Canvas")
      {
        new Exception("Invalid value", "Passed value 'canvas' was not a value of type Canvas.");
        return;
      }
      var ctx = canvas.context;
      if(!this.isValid)
      {
        new Exception("Invalid value", "Cannot initialise the object because this instance is invalid.", this);
        return;
      }

      ctx.beginPath();
      ctx.arc(this.position.x, this.position.y, this.width/2, 0, 2*Math.PI);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
    Object.defineProperty(this, "draw", {
      enumerable: true, get: function(){return draw;}, set: Warn
    });

    var _delete = function(){this.display.remove();}
    Object.defineProperty(this, "delete", {
      enumerable: true, get: function(){return _delete;}, set: Warn
    });
  }

  line = function(start, end, width = 1, color = "white")
  {
    var isValid = true;
    Object.defineProperty(this, "isValid", {
      enumerable: true, get: function(){return isValid;}, set: function(v){
        if(key)
          isValid = v;
        else
          Warn();
    }});
    if(isValueDefined(width) && typeof width == "number")
      Object.defineProperty(this, "width", {
        enumerable: true, get: function(){return width;}, set: function(v){
          if(isValueDefined(v) && typeof v == "number")
            width = v;
          else
            new Exception("Unexpected value", "Passed value 'v' was not a number.", this);
       }
      });
    else
      new Exception("Unexpected value", "Passed value 'width' was not a number.", this);
    if(typeof color == "string")
      Object.defineProperty(this, "color", {
        enumerable: true, get: function(){return color;}, set: function(v){
          if(typeof v == string)
            color = v;
          else
            new Exception("Unexpected value", "Passed value 'v' was not a string.", this);
       }
      });
    else
      new Exception("Unexpected value", "Passed value 'color' was not a string.", this);
    if(isValueDefined(start) && isValueDefined(start.typeOf) && start.typeOf() == "Vector2")
    {
      if(start.isValid)
        Object.defineProperty(this, "start", {
          enumerable: true, get: function(){return start;}, set: function(pos){
            if(isValueDefined(pos) && isValueDefined(pos.typeOf) && pos.typeOf() == "Vector2")
            {
              if(pos.isValid)
                start = pos;
              else
                new Exception("Invalid value", "Passed value 'pos' is not a valid Vector2.", this);
            }
            else
              new Exception("Unexpected value", "Passed value 'pos' is not a Vector2.", this);
          }
        });
      else
        new Exception("Invalid value", "Passed value 'start' is not a valid Vector2.", this);
    }
    else
      new Exception("Unexpected value", "Passed value 'start' is not a Vector2.", this);
    if(isValueDefined(end) && isValueDefined(end.typeOf) && end.typeOf() == "Vector2")
    {
      if(end.isValid)
        Object.defineProperty(this, "end", {
          enumerable: true, get: function(){return end;}, set: function(pos){
            if(isValueDefined(pos) && isValueDefined(pos.typeOf) && pos.typeOf() == "Vector2")
            {
              if(pos.isValid)
                end = pos;
              else
                new Exception("Invalid value", "Passed value 'pos' is not a valid Vector2.", this);
            }
            else
              new Exception("Unexpected value", "Passed value 'pos' is not a Vector2.", this);
          }
        });
      else
        new Exception("Invalid value", "Passed value 'end' is not a valid Vector2.", this);
    }
    else
      new Exception("Unexpected value", "Passed value 'end' is not a Vector2.", this);

    Object.defineProperty(this, "toString", {
      enumerable: true, get: function(){return function()
      {
        if(this.isValid)
          return `${this.width} pixels wide Line\nColor: ${this.color}\nStart: ${this.start.toString()}| End: ${this.end.toString()}`;
        else
          return "<a style='color:red;'>[Line]</a>";
      };}, set: Warn
    });

    Object.defineProperty(this, "typeOf", {
      enumerable: true, get: function(){return function()
      {
        if(this.isValid)
          return "Line";
        else
          return "<a style='color:red;'>[Line]</a>";
      };}, set: Warn
    });

    var draw = function(canvas)
    {
      if(!isValueDefined(canvas) || !isValueDefined(canvas.typeOf) || canvas.typeOf() != "Canvas")
      {
        new Exception("Invalid value", "Passed value 'canvas' was not a value of type Canvas.");
        return;
      }
      var ctx = canvas.context;
      if(!this.isValid)
      {
        new Exception("Invalid value", "Cannot draw the object because this instance is invalid.", this);
        return;
      }

      ctx.moveTo(this.start.x, this.start.y);
      ctx.lineTo(this.end.x, this.end.y);
      ctx.lineWidth = this.width;
      ctx.strokeStyle = this.color;
      ctx.stroke();
    }
    Object.defineProperty(this, "draw", {
      enumerable: true, get: function(){return draw;}, set: Warn
    });

    var _delete = function(){this.display.remove();};
    Object.defineProperty(this, "delete", {
      enumerable: true, get: function(){return _delete;}, set: Warn
    });
  }

  box = function(position, size, color = "white")
  {
    var isValid = true;
    Object.defineProperty(this, "isValid", {
      enumerable: true, get: function(){return isValid;}, set: function(v){
        if(key)
          isValid = v;
        else
          Warn();
    }});

    if(typeof color == "string")
      Object.defineProperty(this, "color", {
        enumerable: true, get: function(){return color;}, set: function(v){
          if(typeof v == string)
            color = v;
          else
            new Exception("Unexpected value", "Passed value 'v' was not a string.", this);
       }
      });
    else
      new Exception("Unexpected value", "Passed value 'color' was not a string.", this);
    if(isValueDefined(position) && isValueDefined(position.typeOf) && position.typeOf() == "Vector2")
    {
      if(position.isValid)
        Object.defineProperty(this, "position", {
          enumerable: true, get: function(){return position;}, set: function(pos){
            if(isValueDefined(pos) && isValueDefined(pos.typeOf) && pos.typeOf() == "Vector2")
            {
              if(pos.isValid)
                position = pos;
              else
                new Exception("Invalid value", "Passed value 'pos' was not a valid Vector2.", this);
            }
            else
              new Exception("Unexpected value", "Passed value 'pos' was not a Vector2.", this);
          }
        });
      else
        new Exception("Invalid value", "Passed value 'position' was not a valid Vector2.", this);
    }
    else
      new Exception("Unexpected value", "Passed value 'position' was not a Vector2.", this);
    if(isValueDefined(size) && isValueDefined(size.typeOf) && size.typeOf() == "Vector2")
    {
      if(size.isValid)
        Object.defineProperty(this, "size", {
          enumerable: true, get: function(){return size;}, set: function(s){
            if(isValueDefined(s) && isValueDefined(s.typeOf) && s.typeOf() == "Vector2")
            {
              if(s.isValid)
                size = s;
              else
                new Exception("Invalid value", "Passed value 's' was not a valid Vector2.", this);
            }
            else
              new Exception("Unexpected value", "Passed value 's' was not a Vector2.", this);
          }
        });
      else
        new Exception("Invalid value", "Passed value 'size' was not a valid Vector2.", this);
    }
    else
      new Exception("Unexpected value", "Passed value 'size' was not a Vector2.", this);

      Object.defineProperty(this, "toString", {
        enumerable: true, get: function(){return function()
        {
          if(this.isValid)
            return `Box\nColor: ${this.color}\nPosition: ${this.position.toString()}\nSize: ${this.size.toString()}`;
          else
            return "<a style='color:red;'>[Box]</a>";
        };}, set: Warn
      });

      Object.defineProperty(this, "typeOf", {
        enumerable: true, get: function(){return function()
        {
          if(this.isValid)
            return "Box";
          else
            return "<a style='color:red;'>[Box]</a>";
        };}, set: Warn
      });

    var draw = function(canvas)
    {
      if(!isValueDefined(canvas) || !isValueDefined(canvas.typeOf) || canvas.typeOf() != "Canvas")
      {
        new Exception("Invalid value", "Passed value 'canvas' was not a value of type Canvas.");
        return;
      }
      var ctx = canvas.context;
      if(!this.isValid)
      {
        new Exception("Invalid value", "Cannot draw the object because this instance is invalid.", this);
        return;
      }

      ctx.fillStyle = this.color;
      ctx.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);
    }
    Object.defineProperty(this, "draw", {
      enumerable: true, get: function(){return draw;}, set: Warn
    });

    var _delete = function(){this.display.remove();}
    Object.defineProperty(this, "delete", {
      enumerable: true, get: function(){return _delete;}, set: Warn
    });
  }

  sprite = function(position, size, url)
  {
    var isValid = true;
    Object.defineProperty(this, "isValid", {
      enumerable: true, get: function(){return isValid;}, set: function(v){
        if(key)
          isValid = v;
        else
          Warn();
    }});

    if(typeof url == "string")
      Object.defineProperty(this, "url", {
        enumerable: true, get: function(){return url;}, set: function(v){
          if(typeof v == string)
            url = v;
          else
            new Exception("Unexpected value", "Passed value 'v' was not a string.", this);
       }
      });
    else
      new Exception("Unexpected value", "Passed value 'url' was not a string.", this);
    if(isValueDefined(position) && isValueDefined(position.typeOf) && position.typeOf() == "Vector2")
    {
      if(position.isValid)
        Object.defineProperty(this, "position", {
          enumerable: true, get: function(){return position;}, set: function(pos){
            if(isValueDefined(pos) && isValueDefined(pos.typeOf) && pos.typeOf() == "Vector2")
            {
              if(pos.isValid)
                position = pos;
              else
                new Exception("Invalid value", "Passed value 'pos' was not a valid Vector2.", this);
            }
            else
              new Exception("Unexpected value", "Passed value 'pos' was not a Vector2.", this);
          }
        });
      else
        new Exception("Invalid value", "Passed value 'position' was not a valid Vector2.", this);
    }
    else
      new Exception("Unexpected value", "Passed value 'position' was not a Vector2.", this);
    if(isValueDefined(size) && isValueDefined(size.typeOf) && size.typeOf() == "Vector2")
    {
      if(size.isValid)
        Object.defineProperty(this, "size", {
          enumerable: true, get: function(){return size;}, set: function(s){
            if(isValueDefined(s) && isValueDefined(s.typeOf) && s.typeOf() == "Vector2")
            {
              if(s.isValid)
                size = s;
              else
                new Exception("Invalid value", "Passed value 's' was not a valid Vector2.", this);
            }
            else
              new Exception("Unexpected value", "Passed value 's' was not a Vector2.", this);
          }
        });
      else
        new Exception("Invalid value", "Passed value 'size' was not a valid Vector2.", this);
    }
    else
      new Exception("Unexpected value", "Passed value 'size' was not a Vector2.", this);

      Object.defineProperty(this, "toString", {
        enumerable: true, get: function(){return function()
        {
          if(this.isValid)
            return `Sprite\nUrl: ${this.url}\nPosition: ${this.position.toString()}\nSize: ${this.size.toString()}`;
          else
            return "<a style='color:red;'>[Sprite]</a>";
        };}, set: Warn
      });

      Object.defineProperty(this, "typeOf", {
        enumerable: true, get: function(){return function()
        {
          if(this.isValid)
            return "Sprite";
          else
            return "<a style='color:red;'>[Sprite]</a>";
        };}, set: Warn
      });

    var draw = function(canvas)
    {
      if(!isValueDefined(canvas) || !isValueDefined(canvas.typeOf) || canvas.typeOf() != "Canvas")
      {
        new Exception("Invalid value", "Passed value 'canvas' was not a value of type Canvas.");
        return;
      }
      var ctx = canvas.context;
      if(!this.isValid)
      {
        new Exception("Invalid value", "Cannot draw the object because this instance is invalid.", this);
        return;
      }

      ctx.drawImage(this.img, this.position.x-this.size.x/2, this.position.y-this.size.y/2, this.size.x, this.size.y);
    }
    Object.defineProperty(this, "draw", {
      enumerable: true, get: function(){return draw;}, set: Warn
    });

    var init = function()
    {
      if(!this.isValid)
      {
        new Exception("Invalid value", "Cannot initialise the object because this instance is invalid.", this);
        return;
      }

      var img = new Image();
      try
      {
        Object.defineProperty(this, "img", {
          enumerable: true, get: function(){return img;}, set: Warn
        });
      }
      catch(error)
      {
        new Exception("Double call", "Cannot call function 'init' after it was already called once.");
        return;
      }
      var Instance = this;
      img.src = this.url;
    }
    Object.defineProperty(this, "init", {
      enumerable: true, get: function(){return init;}, set: Warn
    });

    if(this.isValid)
      this.init();

    var _delete = function(){this.display.remove();}
    Object.defineProperty(this, "delete", {
      enumerable: true, get: function(){return _delete;}, set: Warn
    });
  }
})();

const isValueDefined = function(val)
{
  if(val === undefined || val === null || (typeof val == "number" && isNaN(val)))return false;return true;
}

const Exception = exception;
exception = undefined;
delete(exception);
const Warning = warning;
warning = undefined;
delete(warning);
const Log = log;
log = undefined;
delete(log);
const InputLog = inputlog;
inputlog = undefined;
delete(inputlog);
const Popup = popup;
popup = undefined;
delete(popup);

const Dir2D = dir2d;
dir2d = undefined;
delete(dir2d);
const Vector2 = vector2;
vector2 = undefined;
delete(vector2);
var gs = new Vector2(window.innerWidth*0.9, window.innerHeight*0.9);
Object.defineProperty(window, "globalSize", {
  enumerable: true, get: function(){return gs;}, set: function(s){
    if(isValueDefined(s.typeOf) && s.typeOf() == "Vector2")
    {
      if(s.x >= 0 || s.y >= 0)
        gs = s;
      else
        new Exception("Invalid value", "globalSize cannot have negative numbers.");
    }
    else
      new Exception("Invalid value", "Passed value 's' was not a Vector2.");
 }
});
const Vector3 = vector3;
vector3 = undefined;
delete(vector3);

const Canvas = canvas;
canvas = undefined;
delete(canvas);

const Circle = circle;
circle = undefined;
delete(circle);
const Line = line;
line = undefined;
delete(line);
const Box = box;
box = undefined;
delete(box);
const Sprite = sprite;
sprite = undefined;
delete(sprite);

const stop = function()
{
  clearDraw();
  clearInterval(_Update);
  document.getElementById("Games").innerHTML = "";
}

//Console functions
const toggleConsole = function()
{
  if(Console.style.top == "10px")
    Console.style.top = "-300px";
  else
    Console.style.top = "10px";

  if(Toggle.style.transform == "rotate(180deg)")
    Toggle.style.transform = "rotate(0deg)";
  else
    Toggle.style.transform = "rotate(180deg)";
}

const clearConsole = function()
{
  Logs = document.getElementById("Logs");
  Logs.innerHTML = "<p id='BlankLog'>There are no logs yet.</p>";
}

//Keyboard Inputs
document.addEventListener('keydown', function(event) {
  //Call keydown event
  Keydown(event);

  //Handle commands + lock textarea
  if(event.keyCode == 13) {
    lockTextArea();
    handleCommand(popTextArea());
  }
});

document.addEventListener('keyup', function(event) {
  //Call keyup event
  Keyup(event);

  //unlock textarea
  if(event.keyCode == 13) {
    unlockTextArea();
  }
});

//Get last clicked element
document.addEventListener('click', function(event) {
  //Get the event target element
  event = event || window.event;
  var target = event.target || event.srcElement;

  //Return it
  window.lastClicked = target;
});

document.addEventListener('error', function(error){
  new Exception(error);
});

//Console TextArea functions
const lockTextArea = function()
{
  TextArea.readOnly = true;
}

const unlockTextArea = function()
{
  TextArea.readOnly = false;
}

const popTextArea = function()
{
  var Result = TextArea.value;
  TextArea.value = "";
  return Result;
}

const correctTextArea = function()
{
  TextArea.value = TextArea.value.replace(/\n/g, "").replace(/</g, "").replace(/>/g, "");
}

//Console commands
const handleCommand = function(message)
{
  if(message.startsWith("/"))
  {
    var commands = {
      "help":
      {
        "run":function(args)
        {
          var msg = "";
          for(command in commands)
            if(command == "help")
              msg += commands[command].syntax + "\n" + commands[command].desc;
            else
              msg += "\n\n" + commands[command].syntax + "\n" + commands[command].desc;
          new Log(msg, "darkgrey", true, "../Assets/Images/Gear.png");
        },
        "syntax":"Help",
        "desc":"Bring up a help message.",
        "argAmount":0
      },
      "execute":
      {
        "run":function(args){
          var input = new InputLog("file", "Please input a file to execute.", ".p1");
          input.onsubmit = function(data){execute(data.file, data.fileName);};
        },
        "syntax":"Execute",
        "desc":"Execute a .p1 file of your choice.",
        "argAmount":0
      },
      "clear":
      {
        "run":function(args){
          clearConsole();
        },
        "syntax":"Clear",
        "desc":"Clear the console.",
        "argAmount":0
      },
      "stop":
      {
        "run":function(args)
        {
          stop();
        },
        "syntax":"Stop",
        "desc":"Stop the currently running script (if there is any)",
        "argAmount":0
      }
    };

    var args = message.slice(1).split(" ");

    for(var i = 0; i < args.length; i++)
      if(args[i] === "")
      {
        new Exception("Console command", "One or more of the passed arguments returned undefined!");
        return;
      }

    for(command in commands)
      if(command == args[0].toLowerCase())
      {
        if(commands[command].argAmount !== undefined)
        {
          if(commands[command].argAmount < args.length-1)
            new Exception("Console command", "Invalid argument amount. Expected " + commands[command].argAmount + " arguments.");
          else
            commands[command].run(args.slice(1));
        }
        else
        {
          var min = commands[command].argMin;
          if(min === undefined)
            min = 0;
          var max = commands[command].argMax;
          if(max === undefined)
          {
            new Exception("Console command", "Invalid command data for command '" + command + "'");
            return;
          }

          if(min > args.length-1 || max < args.length-1)
            new Exception("Console command", "Invalid argument amount. Expected " + min + " to " + max + " arguments.");
          else
            commands[command].run(args.slice(1));
        }
        return;
      }

    new Exception("Console command", "No command named '" + args[0].toLowerCase() + "' exist.\nTry using /Help for a list of commands.");
  }
  else if(message.replace(/ /g, "") !== "")
    new Log(message);
}

//Handle update
var Update = function(){};
var _execute;
(function(){
  var _Update;
  const _u1 = function(){
    try
    {
      clearInterval(_Update);
      for(var i = 0; i < window.canvases.length; i++)
        window.canvases[i].update();
      Update();
      for(var i = 0; i < window.canvases.length; i++)
        window.canvases[i].updateDraw(window.canvases[i]);
      _Update = setInterval(_u2, window.updateInterval);
    }
    catch(error)
    {
      new Exception(error);
    }
  };
  const _u2 = function(){
    try
    {
      clearInterval(_Update);
      for(var i = 0; i < window.canvases.length; i++)
        window.canvases[i].update();
      Update();
      for(var i = 0; i < window.canvases.length; i++)
        window.canvases[i].updateDraw(window.canvases[i]);
      _Update = setInterval(_u1, window.updateInterval);
    }
    catch(error)
    {
      new Exception(error);
    }
  };
  //Start a javascript file of your choice (has to be in the 'Games' directory)
  _execute = async function(file, gameName)
  {
    if(document.getElementById("Games").innerHTML.replace(/\n/g, "").replace(/ /g, "") == "")
    {
      //Get file data
      const fileContent = await file.text();

      //Create script element
      var game = document.createElement("script");
      game.innerHTML = "try\n{\n  " + fileContent + "\n}\ncatch(error)\n{\n  new Exception(error);\n}";

      //Execute the file
      new Log("Successfully executed '" + gameName + "'!", "lime", true, "../Assets/Images/GreenCheckmark.png");
      document.getElementById("Games").appendChild(game);
      Start();
      Update();
      clearInterval(_Update);
      _Update = setInterval(_u1, window.interval);
    }
    else
    {
      new Popup("Are you sure you want to execute another file?\n(doing this will interupt any other file's execution)", async function(result){if(result == "no"){new Log("Execution aborted.", "yellow", true, "../Assets/Images/YellowWarning.png");return;}
        //Get file data
        const fileContent = await file.text();

        //Create script element
        var game = document.createElement("script");
        game.innerHTML = fileContent;

        //Stop the current script
        stop();

        //Execute the file
        new Log("Successfully executed '" + gameName + "'!", "lime", true, "../Assets/Images/GreenCheckmark.png");
        document.getElementById("Games").appendChild(game);
        Start();
        Update();
        _Update = setInterval(_u1, window.interval);
      }, ["yes", "no"], "../Assets/Images/YellowWarning.png");
    }
  }
})()

const execute = _execute;
_execute = undefined;
delete(_execute);

//Usefull stuff
const isElement = function(obj)
{
  try {
    return obj instanceof HTMLElement;
  }
  catch(e){
    return (typeof obj==="object") &&
      (obj.nodeType===1) && (typeof obj.style === "object") &&
      (typeof obj.ownerDocument ==="object");
  }
}

var random = {};

(function(){
  function Warn(){new Warning("Protection level", "Cannot set property due to its protection level.");}

  var range = function(start, end)
  {
    if(typeof start === "number" && typeof end === "number")
      return Math.random() * (end-start) + start;
    else
    {
      new Exception("Unexpected value", "One or more of the passed values in Random.range() were not values of type number.");
      return 0;
    }
  }
  Object.defineProperty(random, "range", {
    enumerable: true, get: function(){return range;}, set: Warn
  });

  var string = function(length)
  {
    if(typeof length === "number")
    {
      var result = "";
      var list = [];
      var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for(var i = 0; i < length; i++)
        list.push(chars[parseInt(Random.range(0, chars.length))]);

      for(var i = 0; i < list.length; i++)
        result += list[i];

      return result;
    }
    else
    {
      if(length === undefined)
        return "";

      new Exception("Unexpected value", "Passed value 'length' in Random.string() was not a value of type number.");
      return "";
    }
  }
  Object.defineProperty(random, "string", {
    enumerable: true, get: function(){return string;}, set: Warn
  });

  var color = function()
  {
    var r = parseInt(Random.range(0, 255));
    var g = parseInt(Random.range(0, 255));
    var b = parseInt(Random.range(0, 255));
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
  Object.defineProperty(random, "color", {
    enumerable: true, get: function(){return color;}, set: Warn
  });

  var choose = function(array)
  {
    try
    {
      var i = parseInt(Random.range(0, array.length));
      return array[i];
    }
    catch(error)
    {
      new Exception("Unexpected value", "Cannot choose random element from passed value 'array' because the value wasn't an instance of Array.");
    }
  }
  Object.defineProperty(random, "choose", {
    enumerable: true, get: function(){return choose;}, set: Warn
  });
})();

const Random = random;
random = undefined;
delete(random);

const normalize = function(value, min, max)
{
  if(typeof value == "number" && typeof min == "number" && typeof max == "number")
    return (value - min)/(max - min);
  else
    new Exception("Unexpected value", "Cannot normalize value becauses one or more of the passed values weren't values of type number.");
}

const clamp = function(value, min, max)
{
  if(typeof value == "number" && typeof min == "number" && typeof max == "number")
  {
    if(value < min)
      return min;
    else if(value > max)
      return max;
    else
      return value;
  }
  else
    new Exception("Unexpected value", "Cannot clamp value becauses one or more of the passed values weren't values of type number.");
}

const map = function(value, min1, max1, min2, max2)
{
  if(typeof value == "number" && typeof min1 == "number" && typeof max1 == "number" && typeof min2 == "number" && typeof max2 == "number")
  {
    return (value - min1)/(max1 - min1)*(max2 - min2)+min2;
  }
  else
    new Exception("Unexpected value", "Cannot map value becauses one or more of the passed values weren't values of type number.");
}
