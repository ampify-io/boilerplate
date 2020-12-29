import $ from '@ampify/aquery';
 
/*
  use aQuery to create dynamic behaviors in AMP (e.g. open menu, carousel, auto-complete etc.. )
  The syntax is based entirely on jQuery, but unlike jQuery, The end result is AMP components 

  Before you start: https://ampify.io/guides/docs/how_ampify_works
  aQuery Documentation: https://ampify.io/guides/docs/aquery/intro
*/
export default () => {
  console.log('Hello World');
 
  /*
    === hamburger menu example ===
    Use jQuery like syntax to create the menu functionality in the AMP page.
    In the background, this code will be converted to AMP!
  */
  $('.hamburger').on('click', (e) => {
    $(e.target).toggleClass('active');
 
    $('#menu').toggle();
  });
 
  /*
    === override css in the origin page example ===

    Sometimes there are discrepancies between the original page and the converted AMP page.
    you can fix it by inserting custom css that will be applied on the AMP page.
    You can even use !important statement. Ampify’s converter knows to re-arrange CSS by specificity
  */
  $.injectCss(`
    .some-element {
      display: block !important;
      width: 100vw !important;
    }
  `);
 
  /* === return instructions to Ampify’s converter === */
  return {
    /*
      === exclude classes and IDs from minification ===

      You can manually exclude classes and IDs from minification by calling $.cssIgnore(‘.ignore-this’, ‘#and-this’). 
      By default, Ampify minifies all CSS classes and IDs in order to meet the 75k
      css limit requirement. However it is necessary to keep the IDs and
      classes that have been used in the aQuery code. By default $.getCssIgnore() returns an array
      of all the classes and IDs that have been used in this file. Manual exclusion adds to this array. 
    */   
    cssIgnore: $.getCssIgnore(),
    
    /* 
      === Development ===  

      With Ampify’s chrome extension it's possible to override some default behaviors when convertings.
    */
    debug: {
      /*
        === Change to false to disable css minification ===

        this will often lead to AMP validation error as the CSS might exceed 75K, 
        but it’s very helpful while developing, as it helps to identify and debug discrepancies between the original page and the AMP page. 
      */
      minify: true,
 
      /*
        === Disable Ampify’s converter  ===

        every time the aQuery code is being executed on the original page with the browser extension, 
        the resulting HTML is sent to Ampify’s converter to create the AMP page. 
        This action can take up to a minute.
        When debugging the aQuery code it can be useful to disable the conversion
        and just check the results of the aQuery code in the original page.
      */
      convert: true, 
    },
  };
};
 