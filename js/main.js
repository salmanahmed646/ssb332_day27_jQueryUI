$(document).ready(function(){
    // Draggable-Start
    $( "#draggable" ).draggable();
    // Draggable-End

    // Accordion-Start
    $( "#accordion" ).accordion({
        collapsible: true
    });
    // Accordion-End

    //AutoComplate-Start
    var availableTags = [
        "Html",
        "css",
        "Bootstrap",
        "JavaScript",
        "React",
        "Node js"
      ];
      $( "#Datalist" ).autocomplete({
        source: availableTags
      });
      //AutoComplate-End

      //jQuery 001
      // CheckBox And Radio Start
      $( "input" ).checkboxradio();
      // CheckBox And Radio End

      //ControLGroup-Start
      $( ".controlgroup" ).controlgroup()
      $( ".controlgroup-vertical" ).controlgroup({
        "direction": "vertical"
      });
      //ControLGroup-End



      //jQuery 002
      //MEnu-Start
      $( "#menu" ).menu();
      //Menu-End

      // DatePicker-Start
      var progressbar = $( "#progressbar" ),
      progressLabel = $( ".progress-label" );
 
    progressbar.progressbar({
      value: false,
      change: function() {
        progressLabel.text( progressbar.progressbar( "value" ) + "%" );
      },
      complete: function() {
        progressLabel.text( "Complete!" );
      }
    });
 
    function progress() {
      var val = progressbar.progressbar( "value" ) || 0;
 
      progressbar.progressbar( "value", val + 1 );
 
      if ( val < 80 ) {
        setTimeout( progress, 79 );
      }
    }
 
    setTimeout( progress, 2000 );
      // DatePicker-End

      //Selectmenu Start
      var circle = $( "#circle" );
 
      $( "#radius" ).selectmenu({
        change: function( event, data ) {
          circle.css({
            width: data.item.value,
            height: data.item.value
          });
        }
       });
   
      $( "#color" ).selectmenu({
         change: function( event, data ) {
           circle.css( "background", data.item.value );
         }
       });
      //Selectmenu End

      // jQuery 003
      //  ToolTip Start
      var tooltips = $( "[title]" ).tooltip({
        position: {
          my: "left top",
          at: "right+5 top-5",
          collision: "none"
        }
      });
      $( "<button>" )
        .text( "Show help" )
        .button()
        .on( "click", function() {
          tooltips.tooltip( "open" );
        })
        .insertAfter( "form" );
        // ToolTip End

        // Color_Animation Start
        var state = true;
        $( "#button" ).on( "click", function() {
          if ( state ) {
            $( "#effect" ).animate({
              backgroundColor: "#aa0000",
              color: "#fff",
              width: 500
            }, 1000 );
          } else {
            $( "#effect" ).animate({
              backgroundColor: "#fff",
              color: "#000",
              width: 240
            }, 1000 );
          }
          state = !state;
        });
        // Color_animation End

        // Droppable Start
        $( "#droppable_custom" ).draggable();
        $( "#droppable" ).droppable({
          drop: function( event, ui ) {
            $( this )
              .addClass( "ui-state-highlight" )
              .find( "p" )
                .html( "Dropped!" );
          }
        });
        // Droppable End






        // jQuery 004
        // Resizeable Start
        $( "#resizable" ).resizable({
          containment: "#resizeable_container"
        });
        // Resizeable End

        // Selectable Start
        $( "#selectable" ).selectable();
        // Selectable End






        // jQuery 005
        // SortAble Start
        $( ".column" ).sortable({
          connectWith: ".column",
          handle: ".portlet-header",
          cancel: ".portlet-toggle",
          placeholder: "portlet-placeholder ui-corner-all"
        });
     
        $( ".portlet" )
          .addClass( "ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" )
          .find( ".portlet-header" )
            .addClass( "ui-widget-header ui-corner-all" )
            .prepend( "<span class='ui-icon ui-icon-minusthick portlet-toggle'></span>");
     
        $( ".portlet-toggle" ).on( "click", function() {
          var icon = $( this );
          icon.toggleClass( "ui-icon-minusthick ui-icon-plusthick" );
          icon.closest( ".portlet" ).find( ".portlet-content" ).toggle();
        });
        // SortAble End

        // Dialog Start
        $( "#dialog" ).dialog();
        // Dialog End

});

