var MenuHeaders = [
  {
    "name":"Console Objects",
    "buttons":[
      {
        "name":"Log",
        "type":"object",
        "data":
        {
          "desc":"This object is used to log into the console.",
          "constructor":'<a style="color:lightblue;">constructor</a>(content, color, scroll, url)',
          "parameters":[
            {
              "name":"content",
              "desc":"the text that will be logged in the console.",
              "mandatory":true
            },
            {
              "name":"color",
              "desc":"the color of the Log's text."
            },
            {
              "name":"scroll",
              "desc":"either or not the Log will be scrolled into view once logged."
            },
            {
              "name":"url",
              "desc":"the passed url for the Log's icon.<br/>If none is passed, there will be no icon."
            }
          ],
          "examples":[
            {
              "name":"Simple example",
              "code":'<a style="color:red;">new</a> <a style="color:orange;">Log</a>(<a style="color:#55ff55;">"Hello!"</a>);',
              "result":"../Assets/Images/Log_object-Example1.png"
            },
            {
              "name":"Color usage",
              "code":'<a style="color:red;">new</a> <a style="color:orange;">Log</a>(<a style="color:#55ff55;">"Hello!"</a>, <a style="color:#55ff55;">"lime"</a>);',
              "result":"../Assets/Images/Log_object-Example2.png"
            },
            {
              "name":"Adding an icon",
              "code":'<a style="color:red;">new</a> <a style="color:orange;">Log</a>(<a style="color:#55ff55;">"Hello!"</a>, <a style="color:#55ff55;">"lime"</a>, <a style="color:blue;">true</a>, <a style="color:#55ff55;">"../Assets/Images/GreenCheckmark.png"</a>);',
              "result":"../Assets/Images/Log_object-Example3.png"
            }
          ],
          "properties":[
            {
              "name":"content",
              "desc":"Holds the content of the Log.",
              "readOnly":true
            },
            {
              "name":"color",
              "desc":"Holds the current color of the Log.",
              "readOnly":true
            },
            {
              "name":"scroll",
              "desc":"Is true if the log was scrolled into view once logged.",
              "readOnly":true
            },
            {
              "name":"url",
              "desc":"Holds the link to the Log's icon if there is one.",
              "readOnly":true,
              "notAlways":true
            },
            {
              "name":"isValid",
              "desc":"Holds the valid state of the object.",
              "readOnly":true
            },
            {
              "name":"display",
              "desc":"Holds the Log's HTMLElement.",
              "readOnly":true
            },
            {
              "name":"text",
              "desc":"Holds the paragraph element where the content of the log is displayed.",
              "readOnly":true
            },
            {
              "name":"icon",
              "desc":"Holds the image element for the Log's icon if there is one.",
              "readOnly":true,
              "notAlways":true
            }
          ],
          "functions":[
            {
              "name":'<a style="color:lightblue;">print</a>()',
              "desc":"Is called upon initialisation of the Log.<br/>It prints the log.",
              "onlyOnce":true
            },
            {
              "name":'<a style="color:lightblue;">edit</a>(content)',
              "desc":"Is used to edit the Log's content and displayed text."
            },
            {
              "name":'<a style="color:lightblue;">setColor</a>(color)',
              "desc":"Is used to edit the Log's color.<br/>Any working CSS color can be used."
            },
            {
              "name":'<a style="color:lightblue;">setImage</a>(url)',
              "desc":"Is used to edit the Log's icon."
            },
            {
              "name":'<a style="color:lightblue;">delete</a>()',
              "desc":"Can be used to delete the log entirely.<br/>Doing that is irreversible and the object will be marked 'invalid' from this point on."
            }
          ]
        }
      },
      {
        "name":"Exception",
        "type":"object",
        "data":
        {
          "desc":"This object is used to Log errors in the console.",
          "constructor":'<a style="color:lightblue;">constructor</a>(type, content, reference = <a style="color:#5555ff;">null</a>)',
          "parameters":[
            {
              "name":"type",
              "desc":"the type of error that occured.",
              "mandatory":true
            },
            {
              "name":"content",
              "desc":"the content of the Exception.<br/>If the value is undefined, the parameter 'type' will be used as the content instead."
            },
            {
              "name":"reference",
              "desc":"the object from wich it was called."
            }
          ],
          "examples":[
            {
              "name":"Simple example",
              "code":'<a style="color:red;">new</a> <a style="color:orange;">Exception</a>(<a style="color:#55ff55;">"Error!"</a>);',
              "result":"../Assets/Images/Exception_object-Example1.png"
            },
            {
              "name":"Type usage",
              "code":'<a style="color:red;">new</a> <a style="color:orange;">Exception</a>(<a style="color:#55ff55;">"Type"</a>, <a style="color:#55ff55;">"Error!"</a>);',
              "result":"../Assets/Images/Exception_object-Example2.png"
            },
            {
              "name":"Adding an reference",
              "code":'<a style="color:red;">class</a> <a style="color:blue;">someObject</a>{<br/>&nbsp;&nbsp;<a style="color:lightblue;">constructor</a>(){<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a style="color:red;">new</a> <a style="color:orange;">Exception</a>(<a style="color:#55ff55;">"Type"</a>, <a style="color:#55ff55;">"Error!"</a>, <a style="color:red;">this</a>);<br/>&nbsp;&nbsp;}<br/>}<br/><br/><a style="color:red;">new</a> <a style="color:blue;">someObject</a>();',
              "result":"../Assets/Images/Exception_object-Example3.png"
            }
          ],
          "properties":[
            {
              "name":"content",
              "desc":"Holds the Exception's content.",
              "readOnly":true
            },
            {
              "name":"type",
              "desc":"Holds the type of the Exception.",
              "readOnly":true
            },
            {
              "name":"reference",
              "desc":"Holds the referenced object passed in the constructor. (null if none was passed)",
              "readOnly":true
            },
            {
              "name":"isValid",
              "desc":"Holds the valid state of the object.",
              "readOnly":true
            },
            {
              "name":"display",
              "desc":"Holds the Exception's HTMLElement.",
              "readOnly":true
            }
          ],
          "functions":[
            {
              "name":'<a style="color:lightblue;">print</a>()',
              "desc":"Is called upon initialisation of the Exception.<br/>Prints the Exception in the console.",
              "onlyOnce":true
            },
            {
              "name":'<a style="color:lightblue;">delete</a>()',
              "desc":"Can be used to delete the Exception entirely."
            }
          ]
        }
      },
      {
        "name":"Warning",
        "type":"object",
        "data":
        {
          "desc":"This object is used to Warn users in the console.",
          "constructor":'<a style="color:lightblue;">constructor</a>(type, content, reference = <a style="color:#5555ff;">null</a>)',
          "parameters":[
            {
              "name":"type",
              "desc":"what type of warning this is.",
              "mandatory":true
            },
            {
              "name":"content",
              "desc":"the content of the Warning.<br/>If the value is undefined, the parameter 'type' will be used as the content instead."
            },
            {
              "name":"reference",
              "desc":"the object from wich it was called."
            }
          ],
          "examples":[
            {
              "name":"Simple example",
              "code":'<a style="color:red;">new</a> <a style="color:orange;">Warning</a>(<a style="color:#55ff55;">"You have been warned!"</a>);',
              "result":"../Assets/Images/Warning_object-Example1.png"
            },
            {
              "name":"Type usage",
              "code":'<a style="color:red;">new</a> <a style="color:orange;">Warning</a>(<a style="color:#55ff55;">"Type"</a>, <a style="color:#55ff55;">"You have been warned!"</a>);',
              "result":"../Assets/Images/Warning_object-Example2.png"
            },
            {
              "name":"Adding a reference",
              "code":'<a style="color:red;">class</a> <a style="color:blue;">someObject</a>{<br/>&nbsp;&nbsp;<a style="color:lightblue;">constructor</a>(){<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a style="color:red;">new</a> <a style="color:orange;">Warning</a>(<a style="color:#55ff55;">"Type"</a>, <a style="color:#55ff55;">"You have been warned!"</a>, <a style="color:red;">this</a>);<br/>&nbsp;&nbsp;}<br/>}<br/><br/><a style="color:red;">new</a> <a style="color:blue;">someObject</a>();',
              "result":"../Assets/Images/Warning_object-Example3.png"
            }
          ],
          "properties":[
            {
              "name":"content",
              "desc":"Holds the content of the Warning.",
              "readOnly":true
            },
            {
              "name":"type",
              "desc":"Holds the type of the Warning.",
              "readOnly":true
            },
            {
              "name":"reference",
              "desc":"Holds the referenced object passed in the constructor. (null if none was passed)",
              "readOnly":true
            },
            {
              "name":"IsValid",
              "desc":"Holds the valid state of the object.",
              "readOnly":true
            },
            {
              "name":"display",
              "desc":"Holds the Warning's HTMLElement.",
              "readOnly":true
            }
          ],
          "functions":[
            {
              "name":'<a style="color:lightblue;">print</a>()',
              "desc":"Is called upon initialisation of the Warning.<br/>Prints the Warning in the console.",
              "onlyOnce":true
            },
            {
              "name":'<a style="color:lightblue;">delete</a>()',
              "desc":"Can be used to delete the Warning entirely."
            }
          ]
        }
      },
      {
        "name":"InputLog",
        "type":"object",
        "data":
        {
          "desc":"This object is used to get input from the user. (text, checkbox, color, file, etc...)",
          "constructor":'<a style="color:lightblue;">constructor</a>(type, header, addition)',
          "parameters":[
            {
              "name":"type",
              "desc":"the type of input wanted.",
              "mandatory":true
            },
            {
              "name":"header",
              "desc":"the header of the InputLog.<br/>If the value is undefined, it will be replaced by '{type} input request'."
            },
            {
              "name":"addition",
              "desc":"the value of the button (if input is a button type) or the accepted file extensions (is input is a file type)."
            }
          ],
          "examples":[
            {
              "name":"Simple example",
              "code":'<a style="color:red;">new</a> <a style="color:orange;">InputLog</a>(<a style="color:#55ff55;">"button"</a>);',
              "result":"../Assets/Images/InputLog_object-Example1.png"
            },
            {
              "name":"Header",
              "code":'<a style="color:red;">new</a> <a style="color:orange;">InputLog</a>(<a style="color:#55ff55;">"button"</a>, <a style="color:#55ff55;">"Header"</a>);',
              "result":"../Assets/Images/InputLog_object-Example2.png"
            },
            {
              "name":"Using the addition",
              "code":'<a style="color:red;">new</a> <a style="color:orange;">InputLog</a>(<a style="color:#55ff55;">"button"</a>, <a style="color:#55ff55;">"Header"</a>, <a style="color:#55ff55;">"Click me!"</a>);',
              "result":"../Assets/Images/InputLog_object-Example3.png"
            }
          ],
          "properties":[
            {
              "name":"header",
              "desc":"Holds the header of the InputLog.",
              "readOnly":true
            },
            {
              "name":"type",
              "desc":"Holds the type of the InputLog.",
              "readOnly":true
            },
            {
              "name":"addition",
              "desc":"Holds the addition for the InputLog.",
              "readOnly":true
            },
            {
              "name":"isValid",
              "desc":"Holds the valid state of the object.",
              "readOnly":true
            },
            {
              "name":"text",
              "desc":"Holds the paragraph element for the InputLog's header.",
              "readOnly":true
            },
            {
              "name":"input",
              "desc":"Holds the input element for the InputLog.",
              "readOnly":true
            },
            {
              "name":"submit",
              "desc":"Holds the submit element for the InputLog. (if the input is not a button type)",
              "notAlways":true,
              "readOnly":true
            },
            {
              "name":"data",
              "desc":"Holds the InputLog's data. (populated once submitted)",
              "readOnly":true
            }
          ],
          "functions":[
            {
              "name":'<a style="color:lightblue;">print</a>()',
              "desc":"Is called upon initialisation of the InputLog.<br/>Prints the InputLog in the console.",
              "onlyOnce":true
            },
            {
              "name":'<a style="color:lightblue;">populateData</a>()',
              "desc":"Is called once the InputLog gets submitted.<br/>Populates the InputLog's data.",
              "protected":true
            },
            {
              "name":'<a style="color:lightblue;">checkValidity</a>()',
              "desc":"Checks if the inputed file corresponds to the passed addition (only file extensions supported)<br/>If the type is not a file or that the addition is not defined, it simply returns true."
            },
            {
              "name":'<a style="color:lightblue;">onSubmit</a>(data)',
              "desc":`Doesn't do anything on its own, but can be redefined and used.<br/>It is passed the object's 'data' property right after calling <span class="codeBlock"><a style="color:lightblue;">populateData</a>()</span>.`,
              "settable":true
            },
            {
              "name":'<a style="color:lightblue;">setColor</a>(color)',
              "desc":"Is called once the inputed value is changed if the type of input is color.<br/>It sets the input log's color."
            },
            {
              "name":'<a style="color:lightblue;">delete</a>()',
              "desc":"Can be used to delete the InputLog entirely.<br/>Doing that is irreversible and the object will be marked 'invalid' from this point on."
            }
          ]
        }
      },
      {
        "name":"Popup",
        "type":"object",
        "data":
        {
          "desc":"This object is used to create a popup and get a response from the user.",
          "constructor":'<a style="color:lightblue;">constructor</a>(header, callback = <a style="color:#5555ff;">function</a>(result){}, options = [<a style="color:#55ff55;">"yes"</a>, <a style="color:#55ff55;">"no"</a>], img, color = <a style="color:#55ff55;">"white"</a>)',
          "parameters":[
            {
              "name":"header",
              "desc":"the header of the Popup.",
              "mandatory":true
            },
            {
              "name":"callback",
              "desc":"the callback function of the Popup called when the user selects a response."
            },
            {
              "name":"options",
              "desc":"the response options the user will have once faced with the Popup."
            },
            {
              "name":"img",
              "desc":"the Popup's icon.<br/>If no value is passed, there will be no icon."
            },
            {
              "name":"color",
              "desc":"the Popup's background color."
            }
          ],
          "examples":[
            {
              "name":"Simple example",
              "code":'<a style="color:red;">new</a> <a style="color:orange;">Popup</a>(<a style="color:#55ff55;">"Header"</a>);',
              "result":"../Assets/Images/Popup_object-Example1.png"
            },
            {
              "name":"Using the callback",
              "code":'<a style="color:red;">new</a> <a style="color:orange;">Popup</a>(<a style="color:#55ff55;">"Header"</a>, <a style="color:#5555ff;">function</a>(result)<br/>{<br/>&nbsp;<a style="color:red;">new</a> <a style="color:orange;">Log</a>(<a style="color:#55ff55;">"You have selected "</a> <a style="color:red;">+</a> result <a style="color:red;">+</a> <a style="color:#55ff55;">"!"</a>);<br/>});',
              "results":["../Assets/Images/Popup_object-Example1.png", "../Assets/Images/Popup_object-Example2.png"]
            },
            {
              "name":"Changing the options",
              "code":'<a style="color:red;">new</a> <a style="color:orange;">Popup</a>(<a style="color:#55ff55;">"Header"</a>, <a style="color:#5555ff;">function</a>(result)<br/>{<br/>&nbsp;<a style="color:red;">new</a> <a style="color:orange;">Log</a>(<a style="color:#55ff55;">"You have selected "</a> <a style="color:red;">+</a> result <a style="color:red;">+</a> <a style="color:#55ff55;">"!"</a>);<br/>},<br/>options = [<a style="color:#55ff55;">"yes"</a>, <a style="color:#55ff55;">"no"</a>, <a style="color:#55ff55;">"maybe"</a>]);',
              "results":["../Assets/Images/Popup_object-Example3.png", "../Assets/Images/Popup_object-Example4.png"]
            },
            {
              "name":"Adding an image",
              "code":'<a style="color:red;">new</a> <a style="color:orange;">Popup</a>(<a style="color:#55ff55;">"Header"</a>, <a style="color:#5555ff;">function</a>(result)<br/>{<br/>&nbsp;<a style="color:red;">new</a> <a style="color:orange;">Log</a>(<a style="color:#55ff55;">"You have selected "</a> <a style="color:red;">+</a> result <a style="color:red;">+</a> <a style="color:#55ff55;">"!"</a>);<br/>},<br/>options = [<a style="color:#55ff55;">"yes"</a>, <a style="color:#55ff55;">"no"</a>, <a style="color:#55ff55;">"maybe"</a>],<br/><a style="color:#55ff55;">"../Assets/Images/Smiley.png"</a>);',
              "results":["../Assets/Images/Popup_object-Example5.png", "../Assets/Images/Popup_object-Example6.png"]
            },
            {
              "name":"Changing the color",
              "code":'<a style="color:red;">new</a> <a style="color:orange;">Popup</a>(<a style="color:#55ff55;">"Header"</a>, <a style="color:#5555ff;">function</a>(result)<br/>{<br/>&nbsp;<a style="color:red;">new</a> <a style="color:orange;">Log</a>(<a style="color:#55ff55;">"You have selected "</a> <a style="color:red;">+</a> result <a style="color:red;">+</a> <a style="color:#55ff55;">"!"</a>);<br/>},<br/>options = [<a style="color:#55ff55;">"yes"</a>, <a style="color:#55ff55;">"no"</a>, <a style="color:#55ff55;">"maybe"</a>],<br/><a style="color:#55ff55;">"../Assets/Images/Smiley.png"</a>, <a style="color:#55ff55;">"lightgrey"</a>);',
              "results":["../Assets/Images/Popup_object-Example7.png", "../Assets/Images/Popup_object-Example2.png"]
            }
          ],
          "properties":[
            {
              "name":"header",
              "desc":"Holds the header of the Popup.",
              "readOnly":true
            },
            {
              "name":"options",
              "desc":"Holds the Popup's response options.",
              "readOnly":true
            },
            {
              "name":"img",
              "desc":"Holds the Popup's icon url. (if there is an icon in the first place)",
              "readOnly":true
            },
            {
              "name":"color",
              "desc":"Holds Popup's background color.",
              "readOnly":true
            },
            {
              "name":"isValid",
              "desc":"Holds the object's valid state.",
              "readOnly":true
            },
            {
              "name":"background",
              "desc":"Holds the Popup's background HTMLElement.",
              "readOnly":true
            },
            {
              "name":"display",
              "desc":"Holds the Popup's HTMLElement.",
              "readOnly":true
            },
            {
              "name":"text",
              "desc":"Holds the paragraph HTMLElement for the Popup's header.",
              "readOnly":true
            },
            {
              "name":"icon",
              "desc":"Holds the image HTMLElement for the Popup's icon. (if there is one)",
              "readOnly":true
            }
          ],
          "functions":[
            {
              "name":'<a style="color:lightblue;">init</a>()',
              "desc":"Is called upon initialisation of the popup.<br/>Creates the nessecary HTMLElements for the popup.",
              "onlyOnce":true
            },
            {
              "name":'<a style="color:lightblue;">callback</a>()',
              "desc":`Doesn't do anything on its own, but can be redefined and used.<br/>It is called once the user selects a response and is passed in the response.`,
              "settable":true
            },
            {
              "name":'<a style="color:lightblue;">delete</a>()',
              "desc":"Can be used to delete the input log entirely.<br/>Doing that is irreversible and the object will be marked 'invalid' from this point on."
            }
          ]
        }
      }
    ]
  },
  {
    "name":"Math Objects",
    "buttons":[
      {
        "name":"Dir2D",
        "type":"object",
        "data":
        {
          "desc":"This object's use is to store/transform/use a 2d direction (left, up, right, down and none).",
          "constructor":'<a style="color:lightblue;">constructor</a>(val = <a style="color:#55ff55;">"none"</a>)',
          "parameters":[
            {
              "name":"val",
              "desc":"the value of the Dir2D."
            }
          ],
          "examples":[
            {
              "name":"Simple example",
              "code":`<a style="color:red;">var</a> dir = <a style="color:red;">new</a> <a style="color:orange;">Dir2D</a>();<br/><a style="color:red;">new</a> <a style="color:orange;">Log</a>(dir);`,
              "result":"../Assets/Images/Dir2D_object-Example1.png"
            },
            {
              "name":"Setting a value",
              "code":`<a style="color:red;">var</a> dir = <a style="color:red;">new</a> <a style="color:orange;">Dir2D</a>(<a style="color:#55ff55;">"left"</a>);<br/><a style="color:red;">new</a> <a style="color:orange;">Log</a>(dir);`,
              "result":"../Assets/Images/Dir2D_object-Example2.png"
            }
          ],
          "properties":[
            {
              "name":"value",
              "desc":"Holds the value of the Dir2D.",
              "readOnly":true
            },
            {
              "name":"axis",
              "desc":"Holds the axis for the Dir2D's value.",
              "readOnly":true
            },
            {
              "name":"isValid",
              "desc":"Holds the object's valid state.",
              "readOnly":true
            },
            {
              "name":"none",
              "desc":'Returns a new Dir2D with the value "none".',
              "noConstruct":true,
              "readOnly":true
            },
            {
              "name":"up",
              "desc":'Returns a new Dir2D with the value "up".',
              "noConstruct":true,
              "readOnly":true
            },
            {
              "name":"down",
              "desc":'Returns a new Dir2D with the value "down".',
              "noConstruct":true,
              "readOnly":true
            },
            {
              "name":"left",
              "desc":'Returns a new Dir2D with the value "left".',
              "noConstruct":true,
              "readOnly":true
            },
            {
              "name":"right",
              "desc":'Returns a new Dir2D with the value "right".',
              "noConstruct":true,
              "readOnly":true
            }
          ],
          "functions":[
            {
              "name":'<a style="color:lightblue;">new</a>()',
              "desc":"Returns a new instance of Dir2D with the same values."
            },
            {
              "name":'<a style="color:lightblue;">equals</a>(dir)',
              "desc":"Compares the current Dir2D with another and returns the result."
            },
            {
              "name":'<a style="color:lightblue;">invert</a>()',
              "desc":"Returns a new instance of Dir2D with the opposite values."
            },
            {
              "name":'<a style="color:lightblue;">toVector2</a>()',
              "desc":"Returns a new instance of Vector2 corresponding to the value of the current Dir2D."
            },
            {
              "name":'<a style="color:lightblue;">toDeg</a>()',
              "desc":"Returns an integer representing the value of the current Dir2D in degrees."
            }
          ]
        }
      },
      {
        "name":"Vector2",
        "type":"object",
        "data":
        {
          "desc":"This object's use is to store/transform/use a 2D position.",
          "constructor":'<a style="color:lightblue;">constructor</a>(x = <a style="color:#5555ff;">0</a>, y = <a style="color:#5555ff;">0</a>)',
          "parameters":[
            {
              "name":"x",
              "desc":"the horizontal position of the Vector2."
            },
            {
              "name":"y",
              "desc":"the vertical position of the Vector2."
            }
          ],
          "examples":[
            {
              "name":"Simple example",
              "code":`<a style="color:red;">var</a> v2 = <a style="color:red;">new</a> <a style="color:orange;">Vector2</a>();<br/><a style="color:red;">new</a> <a style="color:orange;">Log</a>(v2);`,
              "result":"../Assets/Images/Vector2_object-Example1.png"
            },
            {
              "name":"Setting a value",
              "code":`<a style="color:red;">var</a> v2 = <a style="color:red;">new</a> <a style="color:orange;">Vector2</a>(<a style="color:#5555ff;">2</a>, <a style="color:#5555ff;">3</a>);<br/><a style="color:red;">new</a> <a style="color:orange;">Log</a>(v2);`,
              "result":"../Assets/Images/Vector2_object-Example2.png"
            }
          ],
          "properties":[
            {
              "name":"x",
              "desc":"Holds the current horizontal position of the Vector2."
            },
            {
              "name":"y",
              "desc":"Holds the current vertical position of the Vector2."
            },
            {
              "name":"isValid",
              "desc":"Holds the object's valid state.",
              "readOnly":true
            },
            {
              "name":"one",
              "desc":"Returns a new Vector2 with values x and y set to 1",
              "noConstruct":true,
              "readOnly":true
            },
            {
              "name":"up",
              "desc":"Returns a new Vector2 with value x set to 0 and y set to 1",
              "noConstruct":true,
              "readOnly":true
            },
            {
              "name":"right",
              "desc":"Returns a new Vector2 with value x set to 1 and y set to 0",
              "noConstruct":true,
              "readOnly":true
            },
            {
              "name":"zero",
              "desc":"Returns a new Vector2 with values x and y set to 0",
              "noConstruct":true,
              "readOnly":true
            }
          ],
          "functions":[
            {
              "name":'<a style="color:lightblue;">new</a>()',
              "desc":"Returns a new instance of Vector2 with the same values."
            },
            {
              "name":'<a style="color:lightblue;">equals</a>(other)',
              "desc":"Compares the current Vector2 with another and returns the result."
            },
            {
              "name":'<a style="color:lightblue;">add</a>(value)',
              "desc":"Adds two Vector2 (or one Vector2 and a number) together and returns a new instance of Vector2 with thoses values."
            },
            {
              "name":'<a style="color:lightblue;">sub</a>(value)',
              "desc":"Substracts two Vector2 (or one Vector2 and a number) together and returns a new instance of Vector2 with thoses values."
            },
            {
              "name":'<a style="color:lightblue;">multi</a>(value)',
              "desc":"Multiplies two Vector2 (or one Vector2 and a number) together and returns a new instance of Vector2 with thoses values."
            },
            {
              "name":'<a style="color:lightblue;">div</a>(value)',
              "desc":"Divides two Vector2 (or one Vector2 and a number) together and returns a new instance of Vector2 with thoses values."
            },
            {
              "name":'<a style="color:lightblue;">dist</a>(other)',
              "desc":"Returns the distance between two Vector2."
            }
          ]
        }
      },
      {
        "name":"Vector3",
        "type":"object",
        "data":
        {
          "desc":"This object's use is to store/transform/use a 3D position.",
          "constructor":'<a style="color:lightblue;">constructor</a>(x = <a style="color:#5555ff;">0</a>, y = <a style="color:#5555ff;">0</a>, z = <a style="color:#5555ff;">0</a>)',
          "parameters":[
            {
              "name":"x",
              "desc":"the horizontal position of the Vector3."
            },
            {
              "name":"y",
              "desc":"the vertical position of the Vector3."
            },
            {
              "name":"z",
              "desc":"the remaining axis position of the Vector3."
            }
          ],
          "examples":[
            {
              "name":"Simple example",
              "code":`<a style="color:red;">var</a> v3 = <a style="color:red;">new</a> <a style="color:orange;">Vector3</a>();<br/><a style="color:red;">new</a> <a style="color:orange;">Log</a>(v3);`,
              "result":"../Assets/Images/Vector3_object-Example1.png"
            },
            {
              "name":"Setting a value",
              "code":`<a style="color:red;">var</a> v3 = <a style="color:red;">new</a> <a style="color:orange;">Vector3</a>(<a style="color:#5555ff;">1</a>, <a style="color:#5555ff;">2</a>, <a style="color:#5555ff;">3</a>);<br/><a style="color:red;">new</a> <a style="color:orange;">Log</a>(v3);`,
              "result":"../Assets/Images/Vector3_object-Example2.png"
            }
          ],
          "properties":[
            {
              "name":"x",
              "desc":"Holds the current horizontal position of the Vector3."
            },
            {
              "name":"y",
              "desc":"Holds the current vertical position of the Vector3."
            },
            {
              "name":"z",
              "desc":"Holds the current remaining axis position of the Vector3."
            },
            {
              "name":"isValid",
              "desc":"Holds the object's valid state.",
              "readOnly":true
            },
            {
              "name":"one",
              "desc":"Returns a new Vector2 with values x, y and z set to 1",
              "noConstruct":true,
              "readOnly":true
            },
            {
              "name":"forward",
              "desc":"Returns a new Vector2 with value x and y set to 0 and z set to 1",
              "noConstruct":true,
              "readOnly":true
            },
            {
              "name":"up",
              "desc":"Returns a new Vector2 with value x and z set to 0 and y set to 1",
              "noConstruct":true,
              "readOnly":true
            },
            {
              "name":"right",
              "desc":"Returns a new Vector2 with value y and z set to 0 and x set to 1",
              "noConstruct":true,
              "readOnly":true
            },
            {
              "name":"zero",
              "desc":"Returns a new Vector2 with values x, y and z set to 0",
              "noConstruct":true,
              "readOnly":true
            }
          ],
          "functions":[
            {
              "name":'<a style="color:lightblue;">new</a>()',
              "desc":"Returns a new instance of Vector3 with the same values."
            },
            {
              "name":'<a style="color:lightblue;">equals</a>(other)',
              "desc":"Compares the current Vector3 with another and returns the result."
            },
            {
              "name":'<a style="color:lightblue;">add</a>(value)',
              "desc":"Adds two Vector3 (or one Vector3 and a number) together and returns a new instance of Vector3 with thoses values."
            },
            {
              "name":'<a style="color:lightblue;">sub</a>(value)',
              "desc":"Substracts two Vector3 (or one Vector3 and a number) together and returns a new instance of Vector3 with thoses values."
            },
            {
              "name":'<a style="color:lightblue;">multi</a>(value)',
              "desc":"Multiplies two Vector3 (or one Vector3 and a number) together and returns a new instance of Vector3 with thoses values."
            },
            {
              "name":'<a style="color:lightblue;">div</a>(value)',
              "desc":"Divides two Vector3 (or one Vector3 and a number) together and returns a new instance of Vector3 with thoses values."
            },
            {
              "name":'<a style="color:lightblue;">dist</a>(other)',
              "desc":"Returns the distance between two Vector3."
            }
          ]
        }
      }
    ]
  },
  {
    "name":"Display Objects",
    "buttons":[
      {
        "name":"Circle",
        "type":"object",
        "data":
        {
          "desc":"This object's use is to draw a circle at a desired position.",
          "constructor":'<a style="color:lightblue;">constructor</a>(position, width, color = <a style="color:#55ff55;">"white"</a>)',
          "parameters":[
            {
              "name":"position",
              "desc":"the position of the Circle.",
              "mandatory":true
            },
            {
              "name":"width",
              "desc":"the diameter of the Circle.",
              "mandatory":true
            },
            {
              "name":"color",
              "desc":"the color of the Circle."
            }
          ],
          "examples":[
            {
              "name":"Simple example",
              "code":`<a style="color:red;">var</a> center = <a style="color:red;">new</a> <a style="color:orange;">Vector2</a>(<a style="color:#5555ff;">50</a>, <a style="color:#5555ff;">50</a>);<br/><a style="color:red;">new</a> <a style="color:orange;">Circle</a>(center, <a style="color:#5555ff;">25</a>);`,
              "result":"../Assets/Images/Circle_object-Example1.png"
            },
            {
              "name":"Adding color",
              "code":`<a style="color:red;">var</a> center = <a style="color:red;">new</a> <a style="color:orange;">Vector2</a>(<a style="color:#5555ff;">50</a>, <a style="color:#5555ff;">50</a>);<br/><a style="color:red;">new</a> <a style="color:orange;">Circle</a>(center, <a style="color:#5555ff;">25</a>, <a style="color:#55ff55;">"magenta"</a>);`,
              "result":"../Assets/Images/Circle_object-Example2.png"
            }
          ],
          "properties":[
            {
              "name":"position",
              "desc":'Holds the current position of the circle.'
            },
            {
              "name":"width",
              "desc":"Holds the current diameter of the circle."
            },
            {
              "name":"color",
              "desc":"Holds the current color of the circle."
            },
            {
              "name":"isValid",
              "desc":"Holds this object's valid state.",
              "readOnly":true
            }
          ],
          "functions":[
            {
              "name":'<a style="color:lightblue;">draw</a>()',
              "desc":"Draws the Circle to the canvas."
            },
            {
              "name":'<a style="color:lightblue;">delete</a>()',
              "desc":"Can be used to delete the Circle entirely.<br/>Doing that is irreversible and the object will be marked 'invalid' from this point on."
            }
          ]
        }
      },
      {
        "name":"Line",
        "type":"object",
        "data":
        {
          "desc":"This object's use is to draw a line going from one point to another.",
          "constructor":'<a style="color:lightblue;">constructor</a>(start, end, width = <a style="color:#5555ff;">1</a>, color = <a style="color:#55ff55;">"white"</a>)',
          "parameters":[
            {
              "name":"start",
              "desc":"the start position of the Line.",
              "mandatory":true
            },
            {
              "name":"end",
              "desc":"the end position of the Line.",
              "mandatory":true
            },
            {
              "name":"width",
              "desc":"the width of the Line."
            },
            {
              "name":"color",
              "desc":"the color of the Line."
            }
          ],
          "examples":[
            {
              "name":"Simple example",
              "code":`<a style="color:red;">var</a> start = <a style="color:red;">new</a> <a style="color:orange;">Vector2</a>(<a style="color:#5555ff;">250</a>, <a style="color:#5555ff;">500</a>);<br/><a style="color:red;">var</a> end = <a style="color:red;">new</a> <a style="color:orange;">Vector2</a>(<a style="color:#5555ff;">500</a>, <a style="color:#5555ff;">250</a>);<br/><a style="color:red;">new</a> <a style="color:orange;">Line</a>(start, end);`,
              "result":"../Assets/Images/Line_object-Example1.png"
            },
            {
              "name":"Changing width",
              "code":`<a style="color:red;">var</a> start = <a style="color:red;">new</a> <a style="color:orange;">Vector2</a>(<a style="color:#5555ff;">250</a>, <a style="color:#5555ff;">500</a>);<br/><a style="color:red;">var</a> end = <a style="color:red;">new</a> <a style="color:orange;">Vector2</a>(<a style="color:#5555ff;">500</a>, <a style="color:#5555ff;">250</a>);<br/><a style="color:red;">new</a> <a style="color:orange;">Line</a>(start, end, <a style="color:#5555ff">5</a>);`,
              "result":"../Assets/Images/Line_object-Example2.png"
            },
            {
              "name":"Add a color",
              "code":`<a style="color:red;">var</a> start = <a style="color:red;">new</a> <a style="color:orange;">Vector2</a>(<a style="color:#5555ff;">250</a>, <a style="color:#5555ff;">500</a>);<br/><a style="color:red;">var</a> end = <a style="color:red;">new</a> <a style="color:orange;">Vector2</a>(<a style="color:#5555ff;">500</a>, <a style="color:#5555ff;">250</a>);<br/><a style="color:red;">new</a> <a style="color:orange;">Line</a>(start, end, <a style="color:#5555ff;">5</a>, <a style="color:#55ff55;">"orange"</a>);`,
              "result":"../Assets/Images/Line_object-Example3.png"
            }
          ],
          "properties":[
            {
              "name":"start",
              "desc":"Holds the start position of the Line."
            },
            {
              "name":"end",
              "desc":"Holds the end position of the Line."
            },
            {
              "name":"color",
              "desc":"Holds the Line's color."
            },
            {
              "name":"width",
              "desc":"Holds the Line's width."
            },
            {
              "name":"isValid",
              "desc":"Holds the object's valid state.",
              "readOnly":true
            }
          ],
          "functions":[
            {
              "name":'<a style="color:lightblue;">draw</a>()',
              "desc":"Draws the Line to the canvas."
            },
            {
              "name":'<a style="color:lightblue;">delete</a>()',
              "desc":"Can be used to delete the Line entirely.<br/>Doing that is irreversible and the object will be marked 'invalid' from this point on."
            }
          ]
        }
      },
      {
        "name":"Box",
        "type":"object",
        "data":
        {
          "desc":"This object's use is to draw a box at a specific point.",
          "constructor":'<a style="color:lightblue;">constructor</a>(position, size, color = <a style="color:#55ff55;">"white"</a>)',
          "parameters":[
            {
              "name":"position",
              "desc":"the position of the Box.",
              "mandatory":true
            },
            {
              "name":"size",
              "desc":"the size of the Box.",
              "mandatory":true
            },
            {
              "name":"color",
              "desc":"the color of the box."
            }
          ],
          "examples":[
            {
              "name":"Simple example",
              "code":`<a style="color:red;">new</a> <a style="color:orange;">Box</a>(<a style="color:red;">new</a> <a style="color:orange;">Vector2</a>(<a style="color:#5555ff;">50</a>, <a style="color:#5555ff;">50</a>), <a style="color:red;">new</a> <a style="color:orange;">Vector2</a>(<a style="color:#5555ff;">10</a>, <a style="color:#5555ff;">10</a>));`,
              "result":"../Assets/Images/Box_object-Example1.png"
            },
            {
              "name":"Adding color",
              "code":`<a style="color:red;">new</a> <a style="color:orange;">Box</a>(<a style="color:red;">new</a> <a style="color:orange;">Vector2</a>(<a style="color:#5555ff;">50</a>, <a style="color:#5555ff;">50</a>), <a style="color:red;">new</a> <a style="color:orange;">Vector2</a>(<a style="color:#5555ff;">10</a>, <a style="color:#5555ff;">10</a>), <a style="color:#55ff55;">"red"</a>);`,
              "result":"../Assets/Images/Box_object-Example2.png"
            }
          ],
          "properties":[
            {
              "name":"position",
              "desc":"Holds the Box's position."
            },
            {
              "name":"size",
              "desc":"Holds the Box's size."
            },
            {
              "name":"color",
              "desc":"Holds the Box's color."
            },
            {
              "name":"isValid",
              "desc":"Holds the object's valid state.",
              "readOnly":true
            }
          ],
          "functions":[
            {
              "name":'<a style="color:lightblue;">draw</a>()',
              "desc":"Draws the Box to the canvas."
            },
            {
              "name":'<a style="color:lightblue;">delete</a>()',
              "desc":"Can be used to delete the Box entirely.<br/>Doing that is irreversible and the object will be marked 'invalid' from this point on."
            }
          ]
        }
      },
      {
        "name":"Sprite",
        "type":"object",
        "data":
        {
          "desc":"This object's use is to draw an image to the canvas.",
          "constructor":'<a style="color:lightblue;">constructor</a>(position, size, url)',
          "parameters":[
            {
              "name":"position",
              "desc":"the position of the Sprite.",
              "mandatory":true
            },
            {
              "name":"size",
              "desc":"the size of the Sprite.",
              "mandatory":true
            },
            {
              "name":"url",
              "desc":"the Sprite's image url.",
              "mandatory":true
            }
          ],
          "examples":[
            {
              "name":"Simple example",
              "code":`<a style="color:red;">new</a> <a style="color:orange;">Sprite</a>(<a style="color:red;">new</a> <a style="color:orange;">Vector2</a>(<a style="color:#5555ff;">50</a>, <a style="color:#5555ff;">50</a>), <a style="color:red;">new</a> <a style="color:orange;">Vector2</a>(<a style="color:#5555ff;">10</a>, <a style="color:#5555ff;">10</a>), <a style="color:#55ff55;">"../Assets/Images/Smiley.png"</a>);`,
              "result":"../Assets/Images/Sprite_object-Example1.png"
            }
          ],
          "properties":[
            {
              "name":"position",
              "desc":"Holds the position of the Sprite."
            },
            {
              "name":"size",
              "desc":"Holds the size of the Sprite."
            },
            {
              "name":"url",
              "desc":"Holds the Sprite's image url."
            },
            {
              "name":"isValid",
              "desc":"Holds the object's valid state.",
              "readOnly":true
            }
          ],
          "functions":[
            {
              "name":'<a style="color:lightblue;">init</a>()',
              "desc":"Called upon initialization.<br/>Initializes the image HTMLElement for the Sprite.",
              "onlyOnce":true
            },
            {
              "name":'<a style="color:lightblue;">draw</a>()',
              "desc":"Draws the sprite on the canvas."
            },
            {
              "name":'<a style="color:lightblue;">delete</a>()',
              "desc":"Can be used to delete the Sprite entirely.<br/>Doing that is irreversible and the object will be marked 'invalid' from this point on."
            }
          ]
        }
      }
    ]
  },
  {
    "name":"Events",
    "buttons":[
      {
        "name":"Start",
        "type":"function",
        "data":
        {
          "desc":"Gets called right after the script has loaded.",
          "constructor":'<a style="color:lightblue;">Start</a>()',
          "parameters":[],
          "examples":[
            {
              "name":"Simple example",
              "code":`<a style="color:lightblue;">function</a> Start()<br/>{<br/>&nbsp;&nbsp;<a style="color:red;">new</a> <a style="color:orange;">Log</a>(<a style="color:#55ff55;">"It works!"</a>);<br/>}`,
              "result":"../Assets/Images/Start_function-Example1.png"
            }
          ]
        }
      },
      {
        "name":"Update",
        "type":"function",
        "data":
        {
          "desc":'Gets called right after <span class="codeBlock"><a style="color:lightblue;">Start</a>()</span> at specific intervals.<br/>(stored in <span class="codeBlock"><a style="color:magenta;">window</a>.interval</span> in milliseconds)',
          "constructor":'<a style="color:lightblue;">Update</a>()',
          "parameters":[],
          "examples":[
            {
              "name":"Simple example",
              "code":`<a style="color:lightblue;">function</a> Update()<br/>{<br/>&nbsp;&nbsp;<a style="color:red;">new</a> <a style="color:orange;">Log</a>(<a style="color:#55ff55;">"SPAM"</a>);<br/>}`,
              "result":"../Assets/Images/Update_function-Example1.png"
            }
          ]
        }
      },
      {
        "name":"Keydown",
        "type":"function",
        "data":
        {
          "desc":"Gets called once a key gets pressed.",
          "constructor":'<a style="color:lightblue;">Keydown</a>(event)',
          "parameters":[
            {
              "name":"event",
              "desc":"the key event."
            }
          ],
          "examples":[
            {
              "name":"Simple example",
              "code":`<a style="color:lightblue;">function</a> Keydown(<a style="color:grey;">event</a>)<br/>{<br/>&nbsp;&nbsp;<a style="color:red;">if</a>(<a style="color:grey;">event</a>.keyCode == <a style="color:orange;">keyCode</a>.upArrow)<br/>&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a style="color:red;">new</a> <a style="color:orange;">Log</a>(<a style="color:#55ff55;">"You pressed up!"</a>);<br/>&nbsp;&nbsp;}<br/>}`,
              "result":"../Assets/Images/Keydown_function-Example1.png"
            }
          ]
        }
      },
      {
        "name":"Keyup",
        "type":"function",
        "data":
        {
          "desc":"Gets called once a key is released.",
          "constructor":'<a style="color:lightblue;">Keyup</a>(event)',
          "parameters":[
            {
              "name":"event",
              "desc":"the key event."
            }
          ],
          "examples":[
            {
              "name":"Simple example",
              "code":`<a style="color:lightblue;">function</a> Keyup(<a style="color:grey;">event</a>)<br/>{<br/>&nbsp;&nbsp;<a style="color:red;">if</a>(<a style="color:grey;">event</a>.keyCode == <a style="color:orange;">keyCode</a>.downArrow)<br/>&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a style="color:red;">new</a> <a style="color:orange;">Log</a>(<a style="color:#55ff55;">"You released down!"</a>);<br/>&nbsp;&nbsp;}<br/>}`,
              "result":"../Assets/Images/Keyup_function-Example1.png"
            }
          ]
        }
      },
      {
        "name":"OnMessage",
        "type":"function",
        "data":
        {
          "desc":'Gets called a bit after once a Log or an InputLog gets initialized.<br/>(Delay is stored in <span class="codeBlock"><a style="color:magenta;">window</a>.timeout</span> in milliseconds)',
          "constructor":'<a style="color:lightblue;">OnMessage</a>(message)',
          "parameters":[
            {
              "name":"message",
              "desc":"the Log/InputLog that got initialized."
            }
          ],
          "examples":[
            {
              "name":"Simple example",
              "code":`<a style="color:red;">new</a> <a style="color:orange;">Log</a>(<a style="color:#55ff55;">"Hello!"</a>);<br/><br/><a style="color:lightblue;">function</a> OnMessage(<a style="color:grey;">message</a>)<br/>{<br/>&nbsp;&nbsp;<a style="color:red;">new</a> <a style="color:orange;">Warning</a>(<a style="color:#55ff55;">"'"</a> <a style="color:red;">+</a> <a style="color:grey;">message</a>.<a style="color:lightblue;">toString</a>() <a style="color:red;">+</a> <a style="color:#55ff55;">"' has been logged!"</a>);<br/>}`,
              "result":"../Assets/Images/OnMessage_function-Example1.png"
            }
          ]
        }
      },
      {
        "name":"OnError",
        "type":"function",
        "data":
        {
          "desc":'Gets called a bit after once a Warning or an Exception gets initialized.<br/>(Delay is stored in <span class="codeBlock"><a style="color:magenta;">window</a>.timeout</span> in milliseconds)',
          "constructor":'<a style="color:lightblue;">OnError</a>(error)',
          "parameters":[
            {
              "name":"error",
              "desc":"the Warning/Exception that got initialized."
            }
          ],
          "examples":[
            {
              "name":"Simple example",
              "code":`<a style="color:red;">new</a> <a style="color:orange;">Exception</a>(<a style="color:#55ff55;">"test."</a>);<br/><br/><a style="color:lightblue;">function</a> OnError(<a style="color:grey;">error</a>)<br/>{<br/>&nbsp;&nbsp;<a style="color:red;">new</a> <a style="color:orange;">Log</a>(<a style="color:#55ff55;">"'"</a> <a style="color:red;">+</a> <a style="color:grey;">error</a>.<a style="color:lightblue;">toString</a>() <a style="color:red;">+</a> <a style="color:#55ff55;">"' has been logged!"</a>);<br/>}`,
              "result":"../Assets/Images/OnError_function-Example1.png"
            }
          ]
        }
      }
    ]
  },
  {
    "name":"Random",
    "buttons":[
      {
        "name":"range",
        "type":"function",
        "data":
        {
          "desc":"Returns a random value in a certain range.",
          "constructor":'<a style="color:orange;">Random</a>.<a style="color:lightblue;">range</a>(start, end)',
          "parameters":[
            {
              "name":"start",
              "desc":"the minimum value (inclusive)"
            },
            {
              "name":"end",
              "desc":"the maximum value (exclusive)"
            }
          ],
          "examples":[
            {
              "name":"Simple example",
              "code":`<a style="color:red;">new</a> <a style="color:orange;">Log</a>(<a style="color:orange;">Random</a>.<a style="color:lightblue;">range</a>(<a style="color:#5555ff;">1</a>, <a style="color:#5555ff;">10</a>));`,
              "result":"../Assets/Images/Random.range_function-Example1.png"
            }
          ]
        }
      },
      {
        "name":"color",
        "type":"function",
        "data":
        {
          "desc":"Returns a random css rgb color.",
          "constructor":'<a style="color:orange;">Random</a>.<a style="color:lightblue;">color</a>()',
          "parameters":[],
          "examples":[
            {
              "name":"Simple example",
              "code":`<a style="color:red;">new</a> <a style="color:orange;">Circle</a>(<a style="color:red;">new</a> <a style="color:orange;">Vector2</a>(<a style="color:#5555ff;">50</a>, <a style="color:#5555ff;">50</a>), <a style="color:#5555ff;">25</a>, <a style="color:orange;">Random</a>.<a style="color:lightblue;">color</a>());`,
              "result":"../Assets/Images/Random.color_function-Example1.png"
            }
          ]
        }
      },
      {
        "name":"string",
        "type":"function",
        "data":
        {
          "desc":"Returns a random string of a specified length.<br/>(Contains uppercase/lowercase letter and numbers)",
          "constructor":'<a style="color:orange;">Random</a>.<a style="color:lightblue;">string</a>(length)',
          "parameters":[
            {
              "name":"length",
              "desc":"the desired string length."
            }
          ],
          "examples":[
            {
              "name":"Simple example",
              "code":`<a style="color:red;">new</a> <a style="color:orange;">Log</a>(<a style="color:orange;">Random</a>.<a style="color:lightblue">string</a>(<a style="color:#5555ff;">10</a>));`,
              "result":"../Assets/Images/Random.string_function-Example1.png"
            }
          ]
        }
      },
      {
        "name":"choose",
        "type":"function",
        "data":
        {
          "desc":"Returns a random element of a passed array.",
          "constructor":'<a style="color:orange;">Random</a>.<a style="color:lightblue;">choose</a>(array)',
          "parameters":[
            {
              "name":"array",
              "desc":"array from wich the element will be picked from."
            }
          ],
          "examples":[
            {
              "name":"Simple example",
              "code":`<a style="color:red;">var</a> choices = [<a style="color:#55ff55;">"apple"</a>, <a style="color:#55ff55;">"banana"</a>, <a style="color:#55ff55;">"orange"</a>];<br/><br/><a style="color:red;">new</a> <a style="color:orange;">Log</a>(<a style="color:orange;">Random</a>.<a style="color:lightblue">choose</a>(choices));`,
              "result":"../Assets/Images/Random.choose_function-Example1.png"
            }
          ]
        }
      }
    ]
  },
  {
    "name":"Math Functions",
    "buttons":[
      {
        "name":"normalize",
        "type":"function",
        "data":
        {
          "desc":"Returns a normalized value from the passed value.",
          "constructor":'<a style="color:lightblue;">normalize</a>(value, min, max)',
          "parameters":[
            {
              "name":"value",
              "desc":"the initial value (before normalization)"
            },
            {
              "name":"min",
              "desc":"the point where 'value' should become 0."
            },
            {
              "name":"max",
              "desc":"the point where 'value' should become 1."
            }
          ],
          "examples":[
            {
              "name":"Simple example",
              "code":`<a style="color:red;">new</a> <a style="color:orange;">Log</a>(<a style="color:lightblue">normalize</a>(<a style="color:#5555ff;">5</a>, <a style="color:#5555ff;">0</a>, <a style="color:#5555ff;">10</a>));`,
              "result":"../Assets/Images/normalize_function-Example1.png"
            }
          ]
        }
      },
      {
        "name":"clamp",
        "type":"function",
        "data":
        {
          "desc":"Returns a clamped value from the passed value.",
          "constructor":'<a style="color:lightblue;">clamp</a>(value, min, max)',
          "parameters":[
            {
              "name":"value",
              "desc":"the initial value (before clamping)"
            },
            {
              "name":"min",
              "desc":"the minimum value that can be returned."
            },
            {
              "name":"max",
              "desc":"the maximum value that can be returned."
            }
          ],
          "examples":[
            {
              "name":"Simple example",
              "code":`<a style="color:red;">new</a> <a style="color:orange;">Log</a>(<a style="color:lightblue">clamp</a>(<a style="color:#5555ff;">99</a>, <a style="color:#5555ff;">0</a>, <a style="color:#5555ff;">10</a>));`,
              "result":"../Assets/Images/clamp_function-Example1.png"
            }
          ]
        }
      },
      {
        "name":"map",
        "type":"function",
        "data":
        {
          "desc":"Returns a mapped value from the passed value.",
          "constructor":'<a style="color:lightblue;">map</a>(value, min1, max1, min2, max2)',
          "parameters":[
            {
              "name":"value",
              "desc":"the inital value (before mapping)"
            },
            {
              "name":"min1",
              "desc":"the point where 'value' should become 'min2'."
            },
            {
              "name":"max1",
              "desc":"the point where 'value' should become 'max2'."
            },
            {
              "name":"min2",
              "desc":"the value returned if 'value' is equal to 'min1'"
            },
            {
              "name":"max2",
              "desc":"the value returned if 'value' is equal to 'max1'"
            }
          ],
          "examples":[
            {
              "name":"Simple example",
              "code":`<a style="color:red;">new</a> <a style="color:orange;">Log</a>(<a style="color:lightblue">map</a>(<a style="color:#5555ff;">5</a>, <a style="color:#5555ff;">0</a>, <a style="color:#5555ff;">10</a>, <a style="color:#5555ff;">0</a>, <a style="color:#5555ff;">100</a>));`,
              "result":"../Assets/Images/map_function-Example1.png"
            }
          ]
        }
      }
    ]
  },
  {
    "name":"Other Functions",
    "buttons":[
      {
        "name":"isElement",
        "type":"function",
        "data":
        {
          "desc":"Returns true if the passed object is an HTMLElement.",
          "constructor":'isElement(obj)',
          "parameters":[
            {
              "name":"obj",
              "desc":"the object that will be verified."
            }
          ],
          "examples":[
            {
              "name":"Simple example",
              "code":`<a style="color:red;">var</a> obj = {};<br/><br/><a style="color:red;">new</a> <a style="color:orange;">Log</a>(<a style="color:lightblue;">isElement</a>(obj));`,
              "result":"../Assets/Images/isElement_function-Example1.png"
            }
          ]
        }
      },
      {
        "name":"clearDraw",
        "type":"function",
        "data":
        {
          "desc":"Clears the canvas.",
          "constructor":'<a style="color:lightblue;">clearDraw</a>()',
          "parameters":[],
          "examples":[
            {
              "name":"Simple example",
              "code":`<a style="color:red;">new</a> <a style="color:orange;">Circle</a>(<a style="color:red;">new</a> <a style="color:orange;">Vector2</a>(<a style="color:#5555ff;">50</a>, <a style="color:#5555ff;">50</a>), <a style="color:#5555ff;">25</a>);<br/><br/><a style="color:lightblue;">clearDraw</a>();`,
              "result":"../Assets/Images/clearDraw_function-Example1.png"
            }
          ]
        }
      }
    ]
  }
];

var slides = [];
var showIndex = 0;

function setup()
{
  for(var i = 0; i < MenuHeaders.length; i++)
  {
    document.getElementById("menu").innerHTML += `<h3>${MenuHeaders[i].name}</h3>`

    for(var _i = 0; _i < MenuHeaders[i].buttons.length; _i++)
    {
      document.getElementById("menu").innerHTML += `<p onclick="show(${showIndex})">${MenuHeaders[i].buttons[_i].name}</p>`;
      var slide = document.createElement("slide");
      document.getElementById("main").appendChild(slide);
      slides.push(slide);

      if(MenuHeaders[i].buttons[_i].type == "object" || MenuHeaders[i].buttons[_i].type == "function")
      {
        slide.innerHTML += `<h1>${MenuHeaders[i].buttons[_i].name} ${MenuHeaders[i].buttons[_i].type}</h1>`;
        slide.innerHTML += `<p>${MenuHeaders[i].buttons[_i].data.desc}</p><br/><br/>`;
        if(MenuHeaders[i].buttons[_i].type == "object")
          slide.innerHTML += `<p class="codeBlock">${MenuHeaders[i].buttons[_i].data.constructor}</p><br/>`;
        else if(MenuHeaders[i].buttons[_i].type == "function")
          slide.innerHTML += `<span class="codeBlock">${MenuHeaders[i].buttons[_i].data.constructor}</span><br/>`;

        for(var p = 0; p < MenuHeaders[i].buttons[_i].data.parameters.length; p++)
        {
          if(MenuHeaders[i].buttons[_i].type == "object")
          {
            if(MenuHeaders[i].buttons[_i].data.parameters[p].mandatory)
              slide.innerHTML += `<p>The parameter '${MenuHeaders[i].buttons[_i].data.parameters[p].name}' determines ${MenuHeaders[i].buttons[_i].data.parameters[p].desc}<br/><a style="color:red;">It is mandatory to pass in this variable.<a></p><br/>`;
            else
              slide.innerHTML += `<p>The parameter '${MenuHeaders[i].buttons[_i].data.parameters[p].name}' determines ${MenuHeaders[i].buttons[_i].data.parameters[p].desc}</p><br/>`;
          }
          else
            slide.innerHTML += `<br/><br/><p>The parameter '${MenuHeaders[i].buttons[_i].data.parameters[p].name}' holds ${MenuHeaders[i].buttons[_i].data.parameters[p].desc}</p>`;
        }

        slide.innerHTML += "<br/><br/><br/>";

        for(var e = 0; e < MenuHeaders[i].buttons[_i].data.examples.length; e++)
        {
          slide.innerHTML += `<h3>${MenuHeaders[i].buttons[_i].data.examples[e].name}:</h3>`;
          slide.innerHTML += `<p class="codeBlock">${MenuHeaders[i].buttons[_i].data.examples[e].code}</p><br/>`;
          if(MenuHeaders[i].buttons[_i].data.examples[e].result)
            slide.innerHTML += `<h3>Result:</h3><img src="${MenuHeaders[i].buttons[_i].data.examples[e].result}"/><br/><br/><br/>`;
          else if(MenuHeaders[i].buttons[_i].data.examples[e].results)
          {
            slide.innerHTML += "<h3>Result:</h3>";
            for(var r = 0; r < MenuHeaders[i].buttons[_i].data.examples[e].results.length; r++)
              slide.innerHTML += `<img src="${MenuHeaders[i].buttons[_i].data.examples[e].results[r]}"/><br/><br/><br/>`;
          }
        }
      }

      if(MenuHeaders[i].buttons[_i].type == "object")
      {
        slide.innerHTML += '<br/><br/><br/><h2>Some properties you can play with.</h2><br/>';

        var board = '<div class="board"><div class="titles">';

        for(var p = 0; p < MenuHeaders[i].buttons[_i].data.properties.length; p++)
        {
          if(MenuHeaders[i].buttons[_i].data.properties[p].notAlways)
            board += `<div>${MenuHeaders[i].buttons[_i].data.properties[p].name} <img src="../Assets/Images/YellowWarning.png"/></div>`;
          else if(!MenuHeaders[i].buttons[_i].data.properties[p].readOnly)
            board += `<div>${MenuHeaders[i].buttons[_i].data.properties[p].name} <img src="../Assets/Images/Gear.png"/></div>`;
          else
            board += `<div>${MenuHeaders[i].buttons[_i].data.properties[p].name}</div>`;
        }

        board += '</div><div class="descriptions">';

        for(var p = 0; p < MenuHeaders[i].buttons[_i].data.properties.length; p++)
        {
          if(!MenuHeaders[i].buttons[_i].data.properties[p].readOnly)
            board += `<p>${MenuHeaders[i].buttons[_i].data.properties[p].desc}<br/>This value can be set.</p>`;
          else if(MenuHeaders[i].buttons[_i].data.properties[p].noConstruct)
            board += `<p>${MenuHeaders[i].buttons[_i].data.properties[p].desc}<br/>can be used without instance. (no 'new' required)</p>`;
          else
            board += `<p>${MenuHeaders[i].buttons[_i].data.properties[p].desc}</p>`;
        }

        board += "</div></div><br/><br/><br/><br/>";
        slide.innerHTML += board;

        slide.innerHTML += "<h2>Some functions you can play with.</h2><br/><br/>";

        for(var f = 0; f < MenuHeaders[i].buttons[_i].data.functions.length; f++)
        {
          if(MenuHeaders[i].buttons[_i].data.functions[f].protected)
          {
            slide.innerHTML += `<h3><span class="codeBlock">${MenuHeaders[i].buttons[_i].data.functions[f].name}</span><img style="width:20px;height:20px;margin-left:10px;" src="../Assets/Images/RedX.png"/></h3>`;
            slide.innerHTML += `<p>${MenuHeaders[i].buttons[_i].data.functions[f].desc}<br/>This function is <a style="color:red;">PROTECTED</a>.</p><br/><br/>`;
          }
          else if(MenuHeaders[i].buttons[_i].data.functions[f].onlyOnce)
          {
            slide.innerHTML += `<h3><span class="codeBlock">${MenuHeaders[i].buttons[_i].data.functions[f].name}</span><img style="width:20px;height:20px;margin-left:10px;" src="../Assets/Images/YellowWarning.png"/></h3>`;
            slide.innerHTML += `<p>${MenuHeaders[i].buttons[_i].data.functions[f].desc}<br/>This function can only be called <a style="color:red;">ONCE</a>.</p><br/><br/>`;
          }
          else if(MenuHeaders[i].buttons[_i].data.functions[f].settable)
          {
            slide.innerHTML += `<h3><span class="codeBlock">${MenuHeaders[i].buttons[_i].data.functions[f].name}</span><img style="width:20px;height:20px;margin-left:10px;" src="../Assets/Images/Gear.png"/></h3>`;
            slide.innerHTML += `<p>${MenuHeaders[i].buttons[_i].data.functions[f].desc}<br/>This function can be set!</p><br/><br/>`;
          }
          else
          {
            slide.innerHTML += `<h3><span class="codeBlock">${MenuHeaders[i].buttons[_i].data.functions[f].name}</span></h3>`;
            slide.innerHTML += `<p>${MenuHeaders[i].buttons[_i].data.functions[f].desc}</p><br/><br/>`;
          }
        }
      }

      showIndex++;
    }
  }
}
setup();

var boards = document.getElementsByClassName("board");

for(var i = 0; i < slides.length; i++)
  slides[i].style.display = "none";

for(var i = 0; i < boards.length; i++)
{
  var size = 0;
  var titles = boards[i].getElementsByClassName("titles")[0].getElementsByTagName("div");
  for(var _i = 0; _i < titles.length; _i++)
    size+=150;
  boards[i].style.height = size + "px";
}

function show(index)
{
  for(var i = 0; i < slides.length; i++)
  {
    slides[i].style.display = "none";
    if(index == i)
    {
      slides[i].style.display = "block";
      slides[i].scrollIntoView();
    }
  }
}

show(0);
