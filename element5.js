/** Javascript Document */ 
/**
 * element5 is a javascript for game and app with Html5 elements and css.
 * element5 support on Microsoft Edge, Chrome, Firefox, ... 
 */
 
function Element5UniversalExport( root, factory ) 
{
	if( typeof exports === 'object' && typeof module === 'object' ) 
	{
		module.exports = factory();
	}
	else if( typeof define === 'function' && define.amd ) 
	{
		define( factory );
	}
	else 
	{
		var a = factory(); 
		for( var i in a ) 
		{
			( typeof exports === 'object' ? exports : root )[ i ] = a[ i ];
		}
	}
}

function Export( modules ) 
{
	var installedModules = {  };

	// The require function
	function __webpack_require__( moduleId ) 
	{

		// Check if module is in cache
		if( installedModules[ moduleId ] )
			return installedModules[ moduleId ].exports;

		// Create a new module (and put it into the cache)
		var module = installedModules[ moduleId ] = 
		{
			exports: {},
			id: moduleId,
			loaded: false
		};

		// Execute the module function
		modules[ moduleId ].call( module.exports, module, __webpack_require__ );

		// Flag the module as loaded
		module.loaded = true;
		
		// Return the exports of the module
		return module.exports;
	}

	// Load entry module and return exports
	return __webpack_require__( 0 );
}

function Factory() 
{
	return ( function( modules ) 
	{ 
		return Export( modules ) 
	})(
		[
			function( module, __webpack_require__ ) 
			{
				module.exports.element5 = __webpack_require__( 1 ); 
				module.exports.style5 = __webpack_require__( 2 ); 
				module.exports.timeline5 = __webpack_require__( 3 ); 
				module.exports.motion5 = __webpack_require__( 4 ); 
				module.exports.media5 = __webpack_require__( 5 );
				module.exports.request5 = __webpack_require__( 6 ); 
				module.exports.bom5 = __webpack_require__( 7 ); 
				module.exports.store5 = __webpack_require__( 8 );
				module.exports.geo5 = __webpack_require__( 9 ); 
				module.exports.solution5 = __webpack_require__( 10 ); 
			},
			function( module ) 								// pack require ( 1 ) 
			{
				"use strict"; 
				
				/**
				 * @class element5 
				 * @name element5 
				 *
				 * @description . Uses find element5
				 */
				var elementExtCollection = [];
				
				var cert = function( el ) 
				{
					// Registry the element5 extension el with modifier, loader, ...
					element5.Extend( el, DOMModifier ); 
					element5.Extend( el, StyleModifier ); 
					element5.Extend( el, AniModifier ); 
					element5.Extend( el, DOMLoader ); 
					element5.Extend( el, MediaModifier ); 
					element5.Extend( el, ClimbModifier ); 
					element5.Extend( el, JSONModifier );
					
					// Execute the giving extension.
					elementExtCollection.forEach( function( item, index ) 
					{ 
						element5.Extend( el, item ); 
					});
					
					// Add Class Css Self
					if( el.CssSelf != undefined ) 
					{
						var clsn = (/^(.)(el5\_[a-zA-Z0-9]+)$/).exec( el.CssSelf.selectorText ); 
						if( clsn ) 
						{
							el.ShiftClass( clsn[ 2 ] ); 
						}
						if( clsn ) 
						{
							el.el5 = clsn[ 2 ];
						}
						else 
						{
							el.el5 = true;
						}
					} 
					else 
						el.el5 = true; 
					
					return el;
				}; 
				
				var effect = function( el, css, self ) 
				{
					if( el.CssComm == undefined && css != 0 ) 
					{
						el.CssComm = css;
					} 

					// Case of body
					if( el.tagName === 'BODY' )
					{
						if( el.CssSelf === undefined ) 
						{
							// Search and fill the body css rule.
							el.CssSelf = style5.Find( 'body' ); 
							return;
						}
						else 
						{
							return;
						}
					} 
					
					if( self != undefined ) 
					{ 
						if( (/^(.)(el5\_[a-zA-Z0-9]+)$/).exec( self ) ) 
						{
							el.CssSelf = style5.Find( self ); 
						}
					}
				}; 
				
				var createElement = function( tagName, id ) 
				{
					var el = document.createElement( tagName ); 
					
					// Creation certification. 
					el.createdBy = true; 
					
					if( id != undefined )
					{
						el.id = id;
						var css = style5.Find( tagName + '#' + id ); 
						effect( el, css ); 
					}
					else 
					{
						// Make the private class style for element.
						var clsn = '.el5_' + element5.ComDeep(); 
						effect( el, 0, clsn ); 
					}
					return cert( el ); 
				}; 
				
				var element5 = function( target, limit ) 
				{
					try 
					{
						if( typeof target == 'string' ) 
						{
							var elTag = 'div';
							var len = 0; 
							var css = 0;
							
							css = style5.Find( target );
							
							var collect = document.querySelectorAll( target ); 
							
							len = collect.length;
							
							var name = target.slice( 1 );
							var queryType = target.slice( 0, 1 ); 

							// Element had existed.
							if ( len ) 
							{
								if( len == 1 ) 				// Single
								{
									var el = collect[ 0 ]; 
									el.createdBy = false; 
									effect( el, css ); 
									if( !el.el5 ) 
									{
										return cert( el );
									} 
									else 
									{
										return el;
									}
								}
								else 						// Multiple
								{
									var childs = [];
									for( var i = 0; i < len; i++ ) 
									{
										var el = collect[ i ]; 
										el.createdBy = false; 
										if( !el.el5 ) 
										{
											if( el.CssSelf == undefined ) 
											{
												effect( el, css, '.el5_' + element5.ComDeep() );	
											} 
											childs[ i ] = cert( el ); 
										} 
										else 
										{
											childs[ i ] = el; 
										}
									} 
									childs.each = childs.forEach;
									return childs; 
								}
							} 
							else 
							{
								// Check pass
								if( ( /^(.|#)[a-zA-Z0-9\-]+$/ ).exec( target ) == null ) 
									return;
								if( queryType == '#' )							// Single
								{
									return createElement( elTag, name );;
								} 
								else if( queryType == '.' )						// Multiple
								{
									limit = limit || 10;
									var childs = []; 
									for( var i = 0; i < limit; i++ ) 
									{
										var el = document.createElement( elTag ); 
										el.createdBy = true; 
										el.setAttribute( 'class', target.slice( 1 ) ); 
										effect( el, css, '.el5_' + element5.ComDeep() ); 
										childs[ i ] = cert( el ); 
									} 
									childs.each = childs.forEach;
									return childs;
								}
							}
						} 
						else if( typeof target == 'object' ) 
						{
							if( target.nodeType != undefined ) 
							{
								if( parseInt( target.nodeType ) !== 1 ) 
									return;
								
								if( !target.el5 ) 
								{
									if( target.id != undefined && target.id != '' && !target.clonedBy ) 
									{
										var css = style5.Find( '#' + target.id );
										effect( target, css );
									} 
									else 
									{
										effect( target, 0, '.el5_' + element5.ComDeep() ); 
									}
									return cert( target ); 
								}
								else 
									return target;
							} 
							else if( target.length ) 
							{
								var limit = target.length; 
								for( var i = 0;  i < limit; i++ ) 
								{
									if( target[ i ].el5 == undefined ) 
									{
										if( parseInt( target[ i ].nodeType ) !== 1 ) 
										{
											element5( target[ i ] ); 
										}
									} 
								} 
								return target;
							}
							return;
						} 
						
					} 
					catch ( err ) 
					{
						if( console.error ) 
							console.error( err );
						else 
							console.log( err ); 
						return;
					}
				}; 
				
				var ClimbModifier = 
				{
					Find: function( selector ) 
					{
						if( selector == undefined ) 
						{
							return null;
						}
						
						var el = this;
						var domNodes = this.querySelectorAll( selector ); 
						var len = domNodes.length;
						if( len == 1 ) 
						{
							el = domNodes[ 0 ]; 
							return ( !el.el5 ) ? element5( el ) : el;
						} 
						else if( len > 1 )
						{
							var childs = [];
							for( var i = 0; i < len; i++ ) 
							{
								var el = domNodes[ i ];
								childs.push( ( !el.el5 ) ? element5( el ) : el );
							} 
							childs.each = childs.forEach;
							return childs;
						} 
						else 
						{
							return len;
						}
					}, 
					FirstChild: function() 
					{
						var el = this.firstElementChild;
						if( el == null ) 
						{
							return null;
						}
						if( !el.el5 ) 
						{
							return element5( el );
						} 
						return el;
					},
					Next: function() 
					{
						var el = this.nextElementSibling; 
						if( el ) 
						{
							if( !el.el5 ) element5( el );
							return el; 
						} 
						return false;
					}, 
					Prev: function() 
					{
						var el = this.previousElementSibling;
						if( el ) 
						{
							if( !el.el5 ) element5( el ); 
							return el;
						} 
						return false;
					},
					Parents: function( selector ) 
					{
						var el = this;
						if( el.Parent ) 
						{
							return el.Parent( selector, true );
						} 
						else 
						{
							return ClimbModifier.Parent( selector, true, el );
						}
					},
					Parent: function( selector, s, target ) 
					{
						var el = target || this;
						var parentEl = 0;
						
						if( selector == undefined )
						{
							var parentEl = this.parentNode || this.parentElement; 
						} 
						else 
						{
							var pat = /(#|.|\[|[a-zA-Z0-9\-\_]*)([a-zA-Z0-9\-\_]+)/;
							var selector = pat.exec( selector );
							
							if( selector )
							{
								if( el.ParentUntil ) 
								{
									var parentEl = el.ParentUntil( selector, s ); 
								} 
								else 
								{
									var parentEl = ClimbModifier.ParentUntil( selector, s, el );
								}
							}
						}
						
						if( parentEl ) 
						{
							if( !parentEl.el5 ) 
							{
								return element5( parentEl );
							}
							return parentEl;
						}
						else 
						{
							return null;
						}
					}, 
					ParentUntil : function( selector, s, target ) 
					{
						var el = target || this;
						var correct;
						var collect;
						
						if( s ) 
						{
							collect = new Array();
						}
						
						while( el ) 
						{
							el = el.parentNode || el.parentElement;
							
							if( el == null ) 
							{
								break;
							}
							
							if( s ) 
							{
								collect.push( el );
							}
							
							if( el.typing )
							{
								correct = el.typing( selector );
							}
							else 
							{
								correct = ClimbModifier.typing( selector, el );
							}
							
							if( correct ) 
							{
								break;
							}
						}
						
						if( !correct ) 
						{
							return null;
						}
						
						if( collect ) 
						{
							collect.forEach( function( item, index ) 
							{
								if( !item.el5 ) 
								{
									return element5( item );
								}
							});
							return collect;
						} 
						
						if( !el.el5 ) 
						{
							return element5( el );
						} 
						return el;
					}, 
					
					typing: function( selector, target ) 
					{
						var el = target || this;
						
						var selectType = selector[ 1 ];
									
						if( selectType === '#' )
						{
							if( el.HasId ) 
							{
								return el.HasId( selector[ 2 ] );
							} 
							else 
							{
								return DOMModifier.HasId( selector[ 2 ], el );
							}
						} 
						else if( selectType === '.') 
						{
							if( el.HasClass ) 
							{
								return el.HasClass( selector[ 2 ] );
							} 
							else 
							{
								return DOMModifier.HasClass( selector[ 2 ], el );
							}
						} 
						else if( selectType === '[' ) 
						{
							var pat = /\[([a-zA-Z0-9]+)=([a-zA-Z0-9]+)(\])/
							selector = pat.exec( selector.input ); 
							if( el.getAttribute ) 
							{
								var attrValue = el.getAttribute( selector[ 1 ] );
								return ( selector[ 2 ] == attrValue ); 
							}
						}
						else 
						{
							var pat = /^([a-zA-Z0-9]+)$/g;
							selector = pat.exec( selector.input );
							if( el.tagName ) 
							{
								return ( el.tagName.toLowerCase() == selector.input ); 
							} 
							else 
							{
								return false;
							}
						}
					}
				}; 
				
				var StyleModifier = 
				{
					Style: function( styles ) 
					{
						if( this.CssSelf )
						{
							this.CssSelf.SetStyles( styles ); 
						}
						else if( this.CssComm )
						{
							this.CssComm.SetStyles( styles ); 
						}
						return this;
					}, 
					
					AddStyle: function( name, value ) 
					{
						if( this.CssSelf ) 
						{
							this.CssSelf.SetStyle( name, value ); 
						}
						else if( this.CssComm )
						{
							this.CssComm.SetStyle( name, value ); 
						}
						else 
						{
							this.style[ name ] = value;
						}
						return this;
					}, 
					
					AddContext: function( ctx ) 
					{
						if( typeof this.el5 == 'string' ) 
						{
							this.CssSelf.AddSelector( ctx + ' ' + this.tagName.toLowerCase() + '.' + this.el5 );
						} 
						return this;
					}, 
					
					SetStyle: function( name, value, com ) 
					{				
						if( com ) 
						{
							if( this.CssComm )
							{
								this.CssComm.SetStyle( name, value ); 
							}
							else if( this.CssSelf ) 
							{
								this.CssSelf.SetStyle( name, value ); 
							}
							else 
							{
								this.style[ name ] = value; 
							}
							return this;
						}
						if( this.CssSelf ) 
						{
							this.CssSelf.SetStyle( name, value ); 
						}
						else if( this.CssComm )
						{
							this.CssComm.SetStyle( name, value ); 
						}
						else 
						{
							this.style[ name ] = value;
						}
						return this;
					}, 
					
					css: function() 
					{
						var el = this;
						if( arguments.length == 2 )
						{
							return el.SetStyle( arguments[0], arguments[1] );;
						}
						return el.SetStyles( arguments[0] );
					},
					
					Css: function() 
					{
						var el = this;
						if( arguments.length == 2 )
						{
							return el.SetStyle( arguments[0], arguments[1], 'com' );;
						}
						return el.SetStyles( arguments[0], 'com' );
					},  
					
					SetStyles: function( styles, com ) 
					{
						if( com === 'com' ) 
						{
							if( this.CssComm )
							{
								this.CssComm.SetStyles( styles ); 
							}
							else if( this.CssSelf ) 
							{
								this.CssSelf.SetStyles( styles ); 
							}
							return this;
						}
						if( this.CssSelf )
						{
							this.CssSelf.SetStyles( styles ); 
						}
						else if( this.CssComm ) 
						{
							this.CssComm.SetStyles( styles ); 
						}
						return this;
					}, 
					
					Show: function() 
					{
						if( this.HasClass( 'hidden' ) )
						{
							this.RemoveClass( 'hidden' );
						} 
						return this;
					}, 
					
					IsShow: function() 
					{
						return ( !this.HasClass( 'hidden' ) );
					}, 
					
					Hide: function() 
					{
						this.AddClass( 'hidden' ); 
						return this;
					}, 
					
					IsHide: function() 
					{
						return ( this.HasClass( 'hidden' ) );
					}, 
					
					Toggle: function() 
					{
						if( this.HasClass( 'hidden' ) ) 
						{
							this.RemoveClass( 'hidden' );
						} 
						else 
						{
							this.AddClass( 'hidden' );
						} 
						return this;
					}
				};
				// Alias Section for Element Style Modifier.
				StyleModifier.SetCss = StyleModifier.SetStyles; 
				
				var MediaModifier = 
				{
					onDevice : function( device ) 
					{
						/**
						 *{
						 *	deviceOption: '(not|only)', 
						 *	deviceType: '(all|print|screen|tv)', 
						 *	features: [ 'max-width : 100px', 'min-width : 200px' ], 
						 *	producted: false,
						 *}
						 */
						// Check exporting device 
						
						if( device.producted == false ) 
						{
							device = style5.CreateDevice( device );
						} 
						
						var selector = 0;
						if( this.CssSelf != undefined ) 
						{
							selector = this.CssSelf.selectorText;
						} 
						else if( this.CssComm != undefined ) 
						{
							selector = this.CssComm.selectorText;
						} 
						
						return device.product.Find( selector ); 
					}, 
					
					onMedia: function( media ) 
					{
						return this.onDevice( media );
					},
				};
				
				var DOMModifier = 
				{
					AddClass: function( clsn ) 
					{
						if( this.HasClass( clsn.trim() ) ) 
						{
							return this; 
						} 
						
						var clsnAttr = this.getAttribute( 'class' ); 
						if( clsnAttr == null || clsnAttr == '' )
						{
							this.setAttribute( 'class', clsn );
						} 
						else if( clsnAttr.indexOf( clsn ) <= -1 ) 
						{
							clsnAttr = clsnAttr.trim() + ' ' + clsn;
							this.setAttribute( 'class', clsnAttr.trim() );
						}					
						return this;
					}, 
					
					HasClass: function( clsn, target ) 
					{
						var el = target || this;
						if( el.getAttribute ) 
						{
							var clsnAttr = el.getAttribute( 'class' ); 
							return ( clsnAttr != null && clsnAttr != '' && clsnAttr.indexOf( clsn ) >= 0 ); 
						}
						return false;
					}, 
					
					RemoveClass: function( clsn ) 
					{
						if( clsn.indexOf( 'el5_' ) >= 0 ) 
							return this;
						
						if( this.HasClass( clsn ) ) 
						{
							var clsnAttr = this.getAttribute( 'class' );
							var classies = clsnAttr.trim().split( ' ' ); 
							classies.forEach( function( value, index ) 
							{
								if( value == clsn ) 
								{
									classies.splice( index, 1 ); 
									return value;
								}
							});
							
							this.setAttribute( 'class', classies.join( ' ' ).trim() );
						} 
						
						return this;
					}, 
					
					ShiftClass: function( clsn ) 
					{
						var clsnAttr = this.getAttribute( 'class' ); 
						clsnAttr = ( clsnAttr != null ) ? clsnAttr.trim() : ''; 
						this.setAttribute( 'class', (clsn.trim() + ' ' + clsnAttr ).trim() ); 
						return this;
					}, 
					
					SetId: function( idstr ) 
					{
						// Processing for id
						if( idstr.indexOf( '#' ) >= 0 ) 
						{
							this.id  = idstr.slice( 1 ); 
						}
						else if( idstr != '' )
						{
							this.id = idstr; 
						} 
						return this;
					}, 
					
					HasId: function( idstr, target ) 
					{
						var el = target || this;
						return ( el.id === idstr );
					}, 
					
					Remove: function() 
					{
						var el = this;
						if( el.parentElement ) 
						{
							el.parentElement.removeChild( el );
						} 
						return this;
					}, 
					
					Html: function( html ) 
					{
						var el = this; 
						if( el.nodeType ) 
						{
							el.innerHTML = html;
							var tmpe = element5.create( 'div' );
							tmpe.innerHTML = html;
							return tmpe;
						} 
						return el;
					}, 

					html: function( html ) 
					{
						var el = this;
						if( el.nodeType ) 
						{
							el.innerHTML = html;
						} 
						return el;
					}, 

					Empty: function() 
					{
						var el = this;
						return el.empty();
					}, 

					empty: function() 
					{
						var el = this;
						el.innerHTML = '';
						return el;
					},

					Text: function( txt ) 
					{
						var el = this;
						if( el.nodeType ) 
						{
							el.innerText = txt; 
						} 
						return el;
					}, 
					
					SetText: function( txt ) 
					{
						var el = this;
						return el.Text( txt );
					}, 

					setText: function( txt ) 
					{
						var el = this;
						return el.Text( txt );
					},
					
					Prepend: function( el ) 
					{
						if( el.nodeType != undefined ) 
						{
							
							var firstNode = this.firstElementChild;
							if( firstNode ) 
							{
								this.insertBefore( el, firstNode );
							} 
							else 
							{
								this.appendChild( el );
							}
						}
						return this; 
					}, 
					
					Equip: function( el ) 
					{
						if( el.nodeType != undefined ) 
						{
							var nodeType = parseInt( el.nodeType );
							if( ( el.el5 && ( nodeType === 1 ) ) || nodeType === 3 ) 
							{
								this.appendChild( el );
							} 
						}
						else if( el.length )
						{
							var len = el.length;
							for( var i = 0; i < len; i++ ) 
							{
								this.Equip( el[ i ] );
							}
						}
						return this;
					}, 
					
					EquipedBy: function( el ) 
					{
						var nodeType = parseInt( el.nodeType ); 

						if( ( el.el5 || el.tagName === 'BODY') && nodeType === 1 ) 
						{
							el.appendChild( this );
						} 
						return this;
					}, 
					
					EquipEvent: function( addHandle, removeHandle ) 
					{
						solution5.SetMutationEvent( this, addHandle, removeHandle ); 
						return this;
					}, 
					
					EquipBefore: function( el ) 
					{
						try 
						{
							if( el == undefined ) throw "The 'el' param is undefined.";
							
							if( this.nodeType === 1 ) 
							{
								var node = el.parentNode;
								node.insertBefore( this, el ); 
							}
						} 
						catch( err ) 
						{
							if( console.error ) 
								console.error( err );
							else 
								console.log( err );
						}
						
						return this;
					}, 
					
					EquipAfter: function( el ) 
					{
						try 
						{
							if( el == undefined ) throw "The 'el' param is undefined."; 
							
							if( this.nodeType === 1 ) 
							{
								var node = el.nextElementSibling;
								if( node != undefined ) 
								{
									node = node.parentNode;
									node.insertBefore( this, el.nextElementSibling );
								}
								else 
								{
									node = el.parentNode;
									node.appendChild( this );
								}
							}
 						}
						catch( err ) 
						{
							if( console.error ) 
								console.error( err );
							else 
								console.log( err ); 
						}
						
						return this;
					}, 
					
					Clone: function( deep ) 
					{
						if( deep == undefined ) 
						{
							deep = true;
						}
						
						var el = this;
						var elCloned = el.cloneNode( deep ); 
						elCloned.clonedBy = true;
						
						return element5( elc );
					},
					
					EnterFullscreen: ( function() 
					{
						// Element.prototype.requestFullscreen = Element.prototype.webkitRequestFullscreen || Element.prototype.mozRequestFullScreen || Element.prototype.msRequestFullscreen || Element.prototype.requestFullscreen;
						// Element.prototype.exitFullscreen = Element.prototype.webkitExitFullscreen || Element.prototype.mozCancelFullScreen || Element.prototype.msExitFullscreen || Element.prototype.exitFullscreen;
						// Element.prototype.onfullscreenerror = Element.prototype.onmozfullscreenerror || Element.prototype.onmsfullscreenerror || Element.prototype.onfullscreenerror;
						// Element.prototype.onfullscreenchange = Element.prototype.onmozfullscreenchange || Element.prototype.onmsfullscreenchange || Element.prototype.onfullscreenchange;
						// document.exitFullscreen = document.webkitExitFullscreen || document.mozCancelFullScreen || document.msExitFullscreen || document.exitFullscreen;
						// document.onfullscreenerror = document.onwebkitfullscreenerror || document.onmozfullscreenerror || document.onmsfullscreenerror || document.onfullscreenerror;
						// document.onfullscreenchange = document.onwebkitfullscreenchange || document.onmozfullscreenchange || document.onmsfullscreenchange || document.onfullscreenchange;
						
						return function( targetElement ) 
						{
							var el = targetElement || this; 
							el.requestFullscreen(); 
							el.fullscreenElement = true;
							
							return this;
						}; 
					})(), 
					
					EscapeFullscreen: function( targetElement ) 
					{
						var el = targetElement || this; 
						document.exitFullscreen(); 
						el.fullscreenElement = false;
						
						return this;
					}, 
					
					ToggleFullscreen: function( targetElement ) 
					{
						var el = targetElement || this;
						if( !el.fullscreenElement ) 
						{
							el.requestFullscreen(); 
							el.fullscreenElement = true;
						} 
						else 
						{
							document.exitFullscreen(); 
							el.fullscreenElement = false;
						}
						return this;
					},
				}; 
				// Alias Section for Element DOM Modifier.
				DOMModifier.PushClass = DOMModifier.AddClass; 
				
				var DOMLoader = 
				{
					includeHTML: function() 
					{
						var el = this;
						element5.includeHtml( el ); 
						return el;
					},
				};
				
				var AniModifier = {
					EffectedBy: function( timeline, duration, delay, timing ) 
					{
						var el = this;
						timeline.Effect( el, duration, delay, timing ); 
						return el;
					}, 
				};
				AniModifier.Animation = AniModifier.EffectedBy;
				AniModifier.Run = AniModifier.EffectedBy;
				AniModifier.Play = AniModifier.EffectedBy; 
				
				var JSONModifier = 
				{
					JSonString: function( value ) 
					{
						return JSON.stringify( value );
					}, 
					
					ParseJSON: function( jsonStr ) 
					{
						return JSON.parse( jsonStr );
					}, 
					
					AddData: function( name, value ) 
					{
						try 
						{
							if( name == undefined ) throw "The name is undefined."; 
							if( value == undefined ) throw "The value is undefined."; 
							
							var el = this;
							
							if( el.BackData == undefined ) 
							{
								el.BackData = new Array();
							} 

							el.BackData.push( '{"' + name + '":' + el.JSonString( value ) + '}' ); 
							
							return el;
						} 
						catch( err ) 
						{
							if( console.error ) 
								console.error( err ); 
							else 
								console.log( err ); 
							return this;
						}
						
					}, 
					
					SetData: function( name, value ) 
					{
						try 
						{
							if( name == undefined ) throw "The name is undefined."; 
							if( value == undefined ) throw "The value is undefined."; 
							
							var el = this;
							
							if( el.BackData == undefined ) 
							{
								return el.AddData( name, value );
							}
							
							var len = el.BackData.length;
							
							for( var i = 0; i < len; i++ ) 
							{
								var item = el.BackData[ i ];
								if( item != undefined ) 
								{
									if( item.indexOf( name ) === 2 ) 
									{
										el.BackData[ i ] = ( '{"' + name + '":' + el.JSonString( value ) + '}' ); 
										return el;
									}
								}
							}
							
							return el.AddData( name, value );
						} 
						catch( err ) 
						{
							if( console.error ) 
								console.error( err );
							else 
								console.log( err ); 
							return this;
						}
					}, 
					
					GetData: function( name ) 
					{
						var el = this;
						
						if( el.BackData == undefined ) 
						{
							return null;
						}
						
						if( name == undefined && el.BackData != undefined ) 
						{
							return el.BackData; 
						} 
						else 
						{
							var len = el.BackData.length;
							for( var i = 0; i < len; i++ ) 
							{
								if( el.BackData[ i ].indexOf( name ) === 2 ) 
								{
									return el.ParseJSON( el.BackData[ i ] )[ name ]; 
								}
							}
							return -1;
						}
					}, 
					
					DeleteData: function( name ) 
					{
						try 
						{
							if( name == undefined ) throw "Delete the data need the name specify.";
							var el = this;
							var len = el.BackData.length;
							
							for( var i = 0; i < len; i++ ) 
							{
								if( el.BackData[ i ].indexOf( name ) === 2 ) 
								{
									return delete el.BackData[ index ]; 
								} 
							}
						} 
						catch( err ) 
						{
							if( console.error ) 
								console.error( err );
							else 
								console.log( err ); 
							return this;
						}
					}, 
					
					SetBackData: function( name, value ) 
					{
						try 
						{
							if( typeof name != 'string' ) throw "The name must be string value.";
							if( typeof value != 'string' ) throw "The value must be string value."; 
							
							if( /^[a-zA-Z0-9\-]{0,32}$/.exec( name ) && value.length <= 256 ) 
							{
								var el = this;
								el.setAttribute( 'data-' + name, value );
							}
						} 
						catch( err ) 
						{
							if( console.error ) 
								console.error( err );
							else 
								console.log( err ); 
							return this;
						}
					}, 
					
					GetBackData: function( name ) 
					{
						var el = this;
						var len = el.attributes.length; 
						var result;
						if( name == undefined ) 
						{
							result = new Array(); 
						}
						
						for( var i = 0; i < len; i++ ) 
						{
							if( el.attributes[ i ].name.indexOf( 'data-' ) >= 0 ) 
							{
								if( name == undefined )
									result.push( { name: el.attributes[ i ].name, value: el.attributes[ i ].value } ); 
								else
									if( ( 'data-' + name ) === ( el.attributes[ i ].name ) ) 
										return el.attributes[ i ].value;
							}
						} 
						
						return result;
					},
					
					SetProperty: function( name, value ) 
					{
						try 
						{
							if( name == undefined ) throw "The name is undefined."; 
							if( value == undefined ) throw "The value is undefined."; 

							var el = this;
							if( !el.hasOwnProperty( name ) ) 
							{
								return el.ModifyProperty( name, value );
							} 
							return el;
						} 
						catch ( err ) 
						{
							if( console.error ) 
								console.error( err );
							else 
								console.log( err ); 
							return this;
						}
					}, 
					
					AddProperty: function( name, value ) 
					{
						try 
						{
							if( name == undefined ) throw "The name is undefined."; 
							if( value == undefined ) throw "The value is undefined."; 
							
							var el = this;
							if( el [ name ] != undefined ) 
							{
								if( this.ModifyProperty[ name ] != 'RestoreValue' ) 
								{
									this.ModifyProperty[ name ] = el [ name ]; 
								}
							}
							return this.ModifyProperty( name, value );
						} 
						catch( err ) 
						{
							if( console.error )
								console.error( err );
							else 
								console.log( err ); 
							return this;
						}
					}, 
					
					HasProperty: function( name ) 
					{
						try 
						{
							if( name == undefined ) throw "The name is undefined."; 
							
							return this.hasOwnProperty( name );
						} 
						catch( err ) 
						{
							if( console.error ) 
								console.error( err );
							else 
								console.log( err ); 
							return this;
						}
					}, 
					
					ModifyProperty: function( name, value ) 
					{
						try 
						{
							if( name == undefined ) throw "The name is undefined."; 
							if( value == undefined ) throw "The value is undefined."; 
							
							var el = this;
							el [ name ] = value; 
							return el;
						}
						catch( err )
						{
							if( console.error ) 
								console.error( err ); 
							else 
								console.log( err ); 
							return this;
						}
					}, 
					
					GetRestorePropertyValue: function( name ) 
					{
						try 
						{
							if( name == undefined ) throw "The name is undefined."; 
							
							var el = this;
							el.RestorePropertyValue( name );
							return el.ModifyProperty.RestoreValue;
						} 
						catch( err ) 
						{
							if( console.error ) 
								console.error( err ); 
							else 
								console.log( err ); 
							return this;
						}
					}, 
					
					RestorePropertyValue: function( name ) 
					{
						try 
						{
							if( name == undefined ) throw "The name is undefined."; 
							
							var el = this;
							var restoreValue = el.ModifyProperty[ name ]; 
							
							if( restoreValue != undefined ) 
							{
								el.ModifyProperty.RestoreValue = restoreValue; 
							}
							
							return this;
						} 
						catch( err ) 
						{
							if( console.error ) 
								console.error( err );
							else 
								console.log( err ); 
							return this;
						}
					}, 
					
					RemoveProperty: function( name ) 
					{
						try 
						{
							if( name == undefined ) throw "The name is undefined."; 
							var el = this;
							if( el[ name ] != undefined ) 
							{
								delete el[ name ]; 
							} 
							if( el.RestorePropertyValue[ name ] != undefined ) 
							{
								delete el [el.RestorePropertyValue[ name ] != undefined];
							}
						} 
						catch( err ) 
						{
							if( console.error ) 
								console.error( err ); 
							else 
								console.log( err );
								return this;
						}
					}, 
					
					AddMethod: function() 
					{
						var el = this;
						var len = arguments.length;
						if( len ) 
						{
							len = len - 1;
							var name = arguments[ 0 ]; 
							var body = arguments[ len ]; 
							
							var params = [];
							
							for( var i = 1; i < len; i++ ) 
							{
								params.push( arguments[ i ] );
							} 
							
							el[ name ] = eval( 'new Function( ' + params.join() + ', "' + body + '" )' );
						} 
						return el;
					}, 
					
					AddFunction: function() 
					{
						var el = this;
						var len = arguments.length;
						if( len ) 
						{
							len = len - 1; 
							var name = arguments[ 0 ]; 
							var body = arguments[ len ]; 
						
							var params = [];
								
							for( var i = 1; i < len; i++ ) 
							{
								params.push( '"' + arguments[ i ] + '"' );
							} 
							
							el[ name ] = eval( 'new Function( ' + params.join() + ', "' + body + '" )' );
						} 
						return el;
					}, 
					
					AddEvent: function( eventType, eventHandle, trace ) 
					{
						trace = trace || false;
						var el = this;
						el.addEventListener( eventType, eventHandle, trace );
						return el;
					}, 
					
					FireEvent: function( eventType ) 
					{
						// Make sure we use the ownerDocument from the provided el to avoid cross-window problems
						var doc, el = this;
						if ( el.ownerDocument ) 
						{
							doc = el.ownerDocument;
						} 
						else if ( el.nodeType == 9 )
						{
							// the el may be the document itself, nodeType 9 = DOCUMENT_NODE
							doc = el;
						} 
						else 
						{
							throw new Error("Invalid el passed to fireEvent: " + el.id);
						}

						if ( el.dispatchEvent ) 
						{
							// Gecko-style approach (now the standard) takes more work
							var eventClass = "";

							// Different events have different event classes.
							// If this switch statement can't map an eventType to an eventClass,
							// the event firing is going to fail.
							switch ( eventType ) 
							{
								case "click": // Dispatching of 'click' appears to not work correctly in Safari. Use 'mousedown' or 'mouseup' instead.
								case "mousedown":
								case "mouseup":
									eventClass = "MouseEvents";
									break;

								case "focus":
								case "change":
								case "blur":
								case "select":
									eventClass = "HTMLEvents";
									break;

								default:
									throw "fireEvent: Couldn't find an event class for event '" + eventType + "'.";
									break;
							}
							var event = doc.createEvent( eventClass );

							var bubbles = eventType == "change" ? false : true;
							event.initEvent( eventType, bubbles, true ); // All events created as bubbling and cancelable.

							event.synthetic = true; // allow detection of synthetic events
							el.dispatchEvent( event, true );
						}
						else  if ( el.fireEvent ) 
						{
							// IE-old school style
							var event = doc.createEventObject();
							event.synthetic = true; // allow detection of synthetic events
							el.fireEvent( "on" + eventType, event );
						}
						
						return el;
					}, 
					
					Draggable: function( home ) 
					{
						var el = this; 
						
						if( home == undefined ) 
						{
							home = true; 
						} 
						
						if( home == false )
						{
							el.css( 'position', 'absolute' ); 
						} 
						
						if( element5.DragableElements == undefined ) 
						{
							element5.DragableElements = [];
						}
						
						element5.DragableElements.push( el );
						
						function defaultStart ( el, evt ) 
						{
							try 
							{
								if( el == undefined ) throw "The 'el' param is undefined.";
								
								var layerX = 0;
								var layerY = 0;
								
								if( evt.type == "mousedown" ) 
								{
									layerX = evt.layerX;
									layerY = evt.layerY; 
								} 
								else if( evt.type == "touchstart" )
								{
									layerX = evt.touches[0].clientX;
									layerY = evt.touches[0].clientY; 
								}
								
								if( home ) 
								{
									el.css( 'position', 'relative' ); 
								}
								
								el.layerX = layerX;
								el.layerY = layerY;
								
								el.draggable = true; 
								
								el.onDragStart( evt );
								
								return el;
							} 
							catch( err ) 
							{
								if( console.error ) 
									console.error( err ); 
								else 
									console.log( err ); 
								return el;
							}
						} 
						
						function defaultEnd( el, evt ) 
						{
							try 
							{
								if( el == undefined ) throw "The 'el' is undefined."; 
								
								el.draggable = false; 
								
								if( home ) 
								{
									el.css( 'position', 'static' );
									el.css( { left: '0px', top: '0px' } );									
								} 
								
								if( evt.type == 'touchend' ) 
								{
									el.css( { transform: 'translateX(0px) translateY(0px)' } ); 
									var positionX = el.offsetLeft + el.layerFinalX;
									var positionY = el.offsetTop + el.layerFinalY; 
									if ( !home ) 
									{
										el.css( { left: positionX + 'px', top: positionY + 'px' } );									
									} 
								}
								
								var len = element5.DroppableElements.length;
								for( var i = 0; i < len; i++ ) 
								{
									var callback = element5.DroppableElements[ i ].checkIsHited;
									
									if( callback ) 
									{
										element5.DroppableElements[ i ].checkIsHited( el ); 
									}
								} 
								
								el.onDragEnd( evt );
								
								return el;
							} 
							catch( err ) 
							{
								if( console.error ) 
									console.error( err ); 
								else 
									console.log( err );
								return el;
							}
						} 
						
						function defaultOver ( el, evt ) 
						{
							try 
							{
								if( el == undefined ) throw "The 'el' is undefined.";
								
								if( !el.draggable ) 
								{
									return el;
								}
								
								var clientX = 0;
								var clientY = 0;
								var touching = ( evt.type == 'touchmove');
								
								if( touching ) 
								{
									clientX = evt.touches[0].clientX;
									clientY = evt.touches[0].clientY;
									el.layerFinalX = clientX - el.layerX;
									el.layerFinalY = clientY - el.layerY;
								} 
								else 
								{
									clientX = evt.clientX;
									clientY = evt.clientY; 
								}
								
								el.dragClientX = clientX;
								el.dragClientY = clientY; 

								evt.preventDefault(); 
								
								if( touching ) 
								{
									el.css( { transform: 'translateX(' + ( el.layerFinalX ) + 'px) translateY(' + (el.layerFinalY) + 'px)' } );
								} 
								else 
								{
									el.css( { left: (clientX - el.layerX) + 'px', top: (clientY-el.layerY) + 'px' } ); 
								}
								
								el.onDragOver( evt ); 
								
								return el;
							} 
							catch( err ) 
							{
								if( console.error ) 
									console.error( err ); 
								else 
									console.log( err ); 
								return el;
							} 
						}
						
						if( bom5.Device.IsMobile ) 
						{
							el.addEventListener("touchstart", function( e ) 
							{
								defaultStart( el, e )
							}, false);
							el.addEventListener("touchend", function( e ) 
							{
								defaultEnd( el, e ); 
							}, false);
							// el.addEventListener("touchcancel", function( e ) {}, false);
							// el.addEventListener("touchleave", function( e ) {}, false);
							el.addEventListener("touchmove", function( e ) 
							{
								defaultOver( el, e );
							}, false);
						} 
						else 
						{
							el.addEventListener( 'mousedown', function( e ) 
							{
								defaultStart( el, e );
							}, false );
							
							el.addEventListener( 'dragover', function( e ) 
							{
								defaultOver( el, e );
							}, true );
							
							el.addEventListener( 'dragend',function( e ) 
							{
								defaultEnd( el, e ); 
							}, false );
						}
						
						return el;
					}, 
					
					onDragStart: function( callback ) 
					{
						var el = this;
						
						if( typeof callback == 'function' ) 
						{
							el.onDragStart = callback;
						} 
						
						return el;
					}, 
					
					onDragOver: function( callback ) 
					{
						var el = this;
						if( typeof callback == 'function' ) 
						{
							el.onDragOver = callback;
						}
						return el;
					}, 
					
					onDragEnd: function( callback ) 
					{
						var el = this;
						if( typeof callback == 'function' ) 
						{
							el.onDragEnd = callback;
						}
						return el;
					},
					
					Droppable: function( ondrop ) 
					{
						if( element5.DroppableElements == undefined ) 
						{
							element5.DroppableElements = [];
						}
						
						var el = this;
						
						element5.DroppableElements.push( el );
						
						el.checkIsHited = function( item ) 
						{
							item = item || null;
							
							var selfLeft = el.offsetLeft;
							var selfTop = el.offsetTop;
							var selfRight = selfLeft + el.offsetWidth;
							var selfBottom = selfTop + el.offsetHeight;
							
							var x = item.dragClientX;
							var y = item.dragClientY;
							
							if( !( x > selfLeft && x < selfRight && y > selfTop && y < selfBottom ) ) 
							{
								return false;
							}
							
							var currLeft = item.offsetLeft + item.layerFinalX;
							var currTop = item.offsetTop + item.layerFinalY;
							var currRight = currLeft + item.offsetWidth;
							var currBottom = currTop + item.offsetHeight; 
							
							if( !( currRight < selfLeft || currLeft > selfRight || currBottom < selfTop || currTop > selfBottom ) ) 
							{
								if( ondrop != undefined && typeof ondrop == 'function' ) 
								{
									var callback = ondrop;
									var e = new Object();
									e.clientX = x;
									e.clientY = y;
									e.target = el;
									callback( e ); 
								} 
								return true; 
							} 
							
							return false;
						}; 
						
						return el;
					}, 
				}; 
				JSONModifier.onDrop = JSONModifier.Droppable;
				JSONModifier.DeleteProperty = JSONModifier.RemoveProperty;
				
				element5.fps = 60;
				element5.GetWindow = function() 
				{
					return window;
				};
				
				element5.GetBody = function() 
				{ 
					var BODY = document.body;
					if( BODY != undefined  && BODY.el5 == undefined ) 
					{
						BODY.scrollToY = function( position, duration ) 
						{
							var maxScrollY = document.body.scrollHeight - window.innerHeight; 
							
							var anime = element5.Math.ComAni1( BODY.scrollTop, position, duration );
							
							var timer = setInterval( function() 
							{
								// Update the scroll.
								BODY.scrollTop -= anime.d; 
								
								// Check the down scroll.
								if( anime.d < 0 && BODY.scrollTop >= position ) 
									clearInterval( timer ); 
								
								// Check the up scroll.
								else if( anime.d > 0 && BODY.scrollTop <= position ) 
									clearInterval( timer ); 
								
								// Check the min and max scroll.
								else if( BODY.scrollTop <= 0 || BODY.scrollTop >= maxScrollY )
									clearInterval( timer );
							}, anime.t );
						}
						return element5( BODY ).css( { webkitTouchCallout: 'none', webkitUserSelect: 'none', khtmlUserSelect: 'none', mozUserSelect: 'none', msUserSelect: 'none', userSelect: 'none' } ); 
					}
					return BODY;
				}; 
				
				element5.Math = {};
				
				element5.Math.ComAni1 = function( c, e, d ) 
				{
					var comObj = new Object();
					d = d || 1000;
					comObj.d = ( c - e ) / element5.fps; 
					comObj.t = d / element5.fps; 
					return comObj;
				};
				
				element5.ComDeep = function( numLen ) 
				{
					numLen = numLen || 4;
					
					if( element5.ComDeep.deepIndex == undefined )
					{
						element5.ComDeep.deepIndex = 0;
					} 
					
					var deep = element5.ComDeep.deepIndex.toString(); 
					element5.ComDeep.deepIndex++; 
					
					var dateTime = new Date(); 
					var time = ( dateTime.getTime() ).toString();
					var limit = numLen - deep.length; 
					
					limit = ( limit < 0 ) ? 0 : limit;
					time = time.slice( time.length - ( limit ) ); 
					
					return ( deep + time );
				};
				
				element5.CreateBlock = function( block ) 
				{
					var len = block.length;
					if( !len ) 
						return;
					
					var down = '>';
					var up = '^';
					var root = element5.Create( 'div' );
					var curr = root;
					block = block.join( ' ' ).split( ' ' );
					len = block.length;
					
					for( var i = 0; i < len; i++ ) 
					{
						var codes = block[ i ];
						var posId = codes . indexOf ( '@' ); 
						var id = codes.substr( posId + 1 );
						var codes = codes.substr( 0, posId );
						var pat = /([\.|\#|\[a-z]{1,})+/; 
						console.log( codes );
						console.log( pat.exec(codes) );
						curr[ id ] = { id : id }; 
						console.log( curr );
						curr = curr[ id ];	// Move to next point.
						console.log( curr );
						break;
					} 
					
					return root;
				}; 
				
				/**
				 * Create element
				 */
				element5.Create = function( selector ) 
				{
					var pat = ( /^([a-zA-Z0-9]+)(\.|#)(.*)$/ ) .exec ( selector );
					
					if( pat == null ) 
					{
						pat = ( /^([a-zA-Z0-9]+)$/ ) . exec( selector ); 
					} 
					
					if( pat == null ) 
					{
						pat = ( /^([a-zA-Z0-9]+)(.*)/ ) . exec( selector );
					}
					
					if( pat == null ) 
					{
						return;
					}
						
					if( pat.length === 2 ) 			// Create with only tag name
					{
						var tagName = pat[ 1 ];
						return createElement( tagName ); 
					} 
					else if( pat.length === 3 ) 
					{
						function setAttrs( str, el ) 
						{
							var patt = /([\w\-\_]+)=([\w\-\_\.]+)/gi;
							var attrs = {}; 
							str.replace( patt , function( match, name, value ) 
							{
								el.setAttribute( name, value );
							}); 
							return element5( el );
						} 
						
						var tagName = pat[ 1 ]; 
						var attrStr = pat[ 2 ];
						var el = document.createElement( tagName );
						
						return setAttrs( attrStr, el );
					}
					else if( pat.length === 4 ) 	// Create with with id or class
					{
						var el;
						var tagName = pat[ 1 ];
						var selectMark = pat[ 2 ];
						var selectName = pat[ 3 ];
						if( selectMark === '#' ) 
						{
							return createElement( tagName, selectName ); 
						} 
						else if( selectMark === '.' ) 
						{
							return createElement( tagName ).AddClass( selectName );
						} 
						return el;
					} 
					return;
				}; 
				element5.create = element5.Create;
				
				element5.MountDevice = function( device ) 
				{
					/**
					 *{
					 *	deviceOption: '(not|only)', 
					 *	deviceType: '(all|print|screen|tv)', 
					 *	features: [ 'max-width : 100px', 'min-width : 200px' ], 
					 *	producted: false,
					 *}
					 */
					// Check exporting device 
					
					if( device.producted == false ) 
					{
						device = style5.CreateDevice( device );
					} 
					return device;
				};
				element5.mountDevice = element5.MountDevice;
				
				element5.Extension = function( ext ) 
				{
					elementExtCollection.push( ext ); 
				};
				element5.extension = element5.Extension;
				
				element5.Extend = function( applier, hier ) 
				{
					for( var x in hier ) 
					{
						if( typeof hier[ x ] == 'function' || applier[ x ] == undefined ) 
						{
							if( Object.getOwnPropertyDescriptor( hier, x ) != undefined ) 
							{
								applier[ x ] = hier[ x ]; 
							}
						} 
						else 
						{
							// Save the primary data.
						}
					} 
					
					return applier;
				}; 
				element5.extend = element5.Extend;
				
				element5.IncludeHtml = function( el ) 
				{
					if ( el.getAttribute("w3-include-html") ) 
					{
						var a = el.cloneNode( false );
						
						var file = el.getAttribute("w3-include-html");
						
						var xhr = new XMLHttpRequest();
						
						xhr.onreadystatechange = function() 
						{
							if ( xhr.readyState == 4 && xhr.status == 200 ) 
							{
								a.removeAttribute( "w3-include-html" );
								
								a.innerHTML = xhr.responseText; 
								
								el.parentNode.replaceChild( a, el );
								
								var callback = el.getAttribute( 'callback' );
								if( callback ) 
									new Function( callback )();
							}
						}      
						
						xhr.open("GET", file, true);
						
						xhr.send();
						
						return;
					}
				};
				element5.includeHtml = element5.IncludeHtml;
				
				module.exports = element5; 
			},  
			function( module, __webpack_require__ ) 		// pack require ( 2 ) 
			{
				var element5 = __webpack_require__( 1 ); 
				
				var Style = document.createElement( 'style' ); 
				Style.id = 'element5 free style Mode.5'; 
				Style.type = 'text/css';
				document.head.appendChild( Style ); 
				var Media = document.createElement( 'style' );
				Media.id = 'element5 free media Mode.6';
				Media.type = 'text/css'; 
				document.head.appendChild( Media ); 
				
				Style.sheet.attach = Style.sheet.insertRule || Style.sheet.addRule; 
				Style.sheet.detach = Style.sheet.deleteRule || Style.sheet.removeRule; 
				Style.currentIndex = -1;
				
				Style.Delete = function( index ) 
				{
					Style.sheet.detach( index );
				};
				
				Style.AddLine = function( selector ) 
				{
					var index = Style.sheet.cssRules.length; 
					Style.sheet.attach( selector + ' {}', index ); 
					var rule = Style.sheet.cssRules[ index ];
					return element5.Extend( rule, Style.ruleModifier ); 
				}; 
				
				Style.AddCss = function( selector ) 
				{
					return Style.AddLine( selector );
				}; 
				
				Style.AddRelateCss = function() 
				{
					return null;
				},
				
				Style.AddTimeLine = function( timeline ) 
				{
					var keyframes = timeline.keyframes;
					
					this.Find( timeline.name, function() 
					{
						if( Style.currentIndex >= 0 ) 
						{
							Style.Delete( Style.currentIndex ); 
						}
					}); 
					
					var index = Style.sheet.cssRules.length; 
					var len = keyframes.length;
					var content = [];
					
					
					
					for( var i = 0; i < len; i++ ) 
					{
						content.push( keyframes[ i ].time + '% { }' );
					}
					
					Style.sheet.attach( '@keyframes ' + timeline.name + ' { ' + content.join( ' ' ) + ' } ' , index );
					
					timeline = Style.sheet.cssRules[ index ]; 
					
					timeline.Effect = function( el, duration, delay, timing ) 
					{
						var timeline = this;
						var delayOffset, timer;
						
						if( timer ) 
						{
							clearTimeout( timer );
						}
						
						if( delay != undefined && delay > 0 )
						{
							delayOffset = delay;
						} 
						else 
						{
							delayOffset = 50;
						}
						
						delay = ( ( delay / 1000 ) || 0.05 ) + 's'; 
						duration = ( ( duration / 1000 ) || 1 ) + 's'; 
						timing = timing || 'linear';
						
						el.SetStyle( 'animation-delay', delay ); 
						el.SetStyle( 'animation-duration', duration ); 
						el.SetStyle( 'animation-timing-function', timing ); 
						el.SetStyle( 'animation-name', '' );
						
						timer = setTimeout( 
							function() 
							{ 
								el.SetStyle( 'animation-name', timeline.name ); 
								clearTimeout( timer ) 
							}, 
							delayOffset 
						);
						
						return timeline;
					};
					
					timeline.keyframes = keyframes; 
					timeline.Keyframes = timeline.cssRules;
					
					timeline.Keyframe = function( index ) 
					{
						var timeline = this;
						var keyframe = timeline.Keyframes[ index ];
						
						if( keyframe.AddStyle != undefined ) 
						{
							return keyframe;
						}
						
						keyframe = element5.Extend( keyframe, Style.ruleModifier );
						if( keyframe.AddSelector ) 
						{
							delete keyframe.AddSelector;
						}
						return keyframe;
					};
					
					for( var i = 0; i < len; i++ ) 
					{
						timeline.Keyframe( i ).SetStyles( keyframes[ i ].style ); 
					}
					
					return timeline;
				}; 
				
				Style.AddDevice = (function() 
				{
					Media.sheet.attach = Media.sheet.insertRule || Media.sheet.addRule;
					Media.sheet.detach = Media.sheet.deleteRule || Media.sheet.removeRule; 
					Style.Media = Style.style7 = Media;
					return function( device, features ) 
					{
						var index = Media.sheet.cssRules.length; 
						var media = (function( d, f ) 
						{
							var and = ( d != '' && f != '' ) ? ' and ' : '';
							return ( d + and + f ).trim();
						})( device, features );
						Media.sheet.attach( '@media ' + media + ' {}' , index ); 
						media = Media.sheet.cssRules[ index ];
						return element5.Extend( media, Style.mediaModifer );
					}; 
				})(), 
				
				Style.Find = function( selector, autoplus ) 
				{
					if( autoplus == undefined ) 
					{
						autoplus = true;
					} 
					
					var len = this.sheet.cssRules.length; 
					var result = 0;
					Style.currentIndex = -1;
					
					if( len ) 
					{
						for( var i = 0; i < len; i++ ) 
						{
							if( selector == ( this.sheet.cssRules[ i ].selectorText || this.sheet.cssRules[ i ].name ) )
							{
								Style.currentIndex = i;
								result = this.sheet.cssRules[ i ]; 
							} 
						}
					} 
					
					if( typeof autoplus == 'boolean' && autoplus ) 
					{
						if( !result ) 
						{
							return this.AddLine( selector );
						}
					}
					else if( typeof autoplus == 'function' ) 
					{
						autoplus(); 
					} 
					
					Style.currentIndex = -1;
					
					if( result ) 
					{
						return result;
					} 
					else 
					{
						return -1;
					}
				}; 
				
				Style.mediaModifer = 
				{
					Find: function( selector ) 
					{
						var media = this;
						var len = media.cssRules.length;
						if( len ) 
						{
							for( var i = 0; i < len; i++ ) 
							{
								var item = media.cssRules[ i ]; 
								if( item.selectorText == selector ) 
								{
									return item;
								}
							}
						} 
						return media.AddLine( selector ); 
					},
					AddLine: function( selector ) 
					{
						var media = this;
						var index = media.cssRules.length; 
						if( !media.attach ) media.attach = media.insertRule || media.addRule;
						if( !media.detach ) media.detach = media.deleteRule || media.removeRule; 
						media.attach( selector + ' {}', index ); 
						return element5.Extend( media.cssRules[ index ], Style.ruleModifier );
					}, 
					AddCss: function( selector ) 
					{
						return this.AddLine( selector );
					}, 
					GetDescription: function() 
					{
						return this.media[ 0 ];
					},
				};
				
				Style.ruleModifier = 
				{
					AddSelector: function( selector ) 
					{
						var rule = this;
						rule.selectorText = rule.selectorText + ', ' + selector.trim(); 
						return rule;
					},
					SetStyle: function( name, value ) 
					{
						var rule = this;
						rule.style[name] = value;
						return rule;
					}, 
					
					css: function() 
					{
						if( arguments.length ) 
						{
							if( arguments.length == 1 )
								this.SetStyles( arguments[0] );
							else if( arguments.length == 2 ) 
								this.SetStyle( arguments[0], arguments[1] );
						}
						return this;
					}, 
					
					Css: function() 
					{
						var rule = this;
						if( arguments.length ) 
						{
							if( arguments.length == 1 )
								rule.SetStyles( arguments[0] );
							else if( arguments.length == 2 ) 
								rule.SetStyle( arguments[0], arguments[1] );
						}
						return rule;
					},
					
					AddStyle: function( name, value ) 
					{
						var rule = this;
						rule.style[name] = value;
						return rule;
					}, 
					
					SetStyles: function( styles ) 
					{
						var rule = this;
						for( x in styles) 
						{
							rule.SetStyle( x, styles[x] );
						} 
						return rule;
					}, 
				}; 
				
				Style.CreateDevice = function( media ) 
				{
					var feature = 0;
					var device = 0;
					var deviceOption = 0;
					var deviceType = 0;
					
					if( media.deviceOption == undefined ) 
					{
						deviceOption = '';
					} 
					else 
					{
						deviceOption = media.deviceOption.trim(); 
					}
					
					if( [ 'not', 'only', '' ].indexOf( deviceOption ) < 0 ) 
					{
						deviceOption = '';
					}
					
					media.deviceOption = deviceOption;
					
					if( media.deviceType == undefined ) 
					{
						deviceType = '';
					} 
					else 
					{
						deviceType = media.deviceType.trim();
					} 
					
					if( [ 'all', 'print', 'screen' ].indexOf( deviceType ) < 0 ) 
					{
						deviceType = '';
					} 
					
					media.deviceType = deviceType; 
					
					if( deviceOption != '' ) 
					{
						if( deviceType != '' ) 
						{
							deviceOption = deviceOption + ' '; 
						} 
						else 
						{
							deviceOption = ''; 
							media.deviceOption = deviceOption;
						}
					}
					
					device = deviceOption + deviceType; 
					
					if( typeof media.features != 'object' && media.features.length <= 0 ) 
					{
						feature = ''; 
					} 
					else 
					{
						var features = new Array(); 
						var featureTypes = 
						[ 
							'aspect-ratio', 'color', 'color-index', 'device-aspect-ratio', 'device-height', 'device-width', 
							'grid', 'height', 'max-aspect-ratio', 'max-color', 'max-color-index', 'max-device-aspect-ratio', 
							'max-device-height', 'max-device-width', 'max-height', 'max-monochrome', 'max-resolution', 'max-width', 
							'min-aspect-ratio', 'min-color', 'min-color-index', 'min-device-aspect-ratio', 'min-device-width', 'min-device-height', 
							'min-height', 'min-monochrome', 'min-resolution', 'min-width', 'monochrome', 'orientation', 
							'overflow-block', 'overflow-inline', 'resolution', 'scan', 'update-frequency', 'width',
						]; 
						
						media.features.forEach( function( item, index ) 
						{
							var featureItem = item.split( ':' );
							if( featureItem.length === 2 ) 
							{
								featureItem.name = featureItem[ 0 ].trim();
								featureItem.value = featureItem[ 1 ].trim(); 
								if( featureTypes.indexOf( featureItem.name ) >= 0 ) 
								{
									features.push( '( ' + featureItem.name + ': ' + featureItem.value + ' )' );
								}
							} 
						});
						
						feature = features.join( ' and ' );
					} 
					
					if( feature != '' ) 
					{
						feature = ' ' + feature;
					} 
					
					media.product = style5.AddDevice( device, feature ); 

					media.producted = true;
					
					if( this.devices == undefined ) 
					{
						this.devices = [ media.product ];
					}
					else 
					{
						this.devices.push( media.product );
					} 
					
					media.Effects = function( selector ) 
					{
						return this.product.Find( selector );
					}; 
					
					return media;
				}
				
				Style.AddLine( '.hidden' ).SetStyles( { display: 'none' } ); 
				Style.AddLine( '.invisible' ).SetStyles( { visibility : 'hidden', opacity: '0' } ); 
				
				module.exports = Style;
			}, 
			function( module, __webpack_require__ ) 		// pack require ( 3 ) 
			{
				var Timeline = 
				{
					Create: function( timeline ) 
					{
						return style5.AddTimeLine( timeline );
					}
				};
				
				module.exports = Timeline;
			}, 
			function( module, __webpack_require__ ) 		// pack require ( 4 ) 
			{
				var spriteModifier = 
				{
					Run: function( fps )
					{
						var motion = this;
						if( motion.MotionTimer == undefined ) 
						{
							if( motion.clip == undefined ) 
							{
								motion.clip = 0;
							} 
							
							if( fps == undefined ) 
							{
								fps = 1000;
							}
							else 
							{
								fps = 1000/fps;
							} 
						
							var offset = parseInt( motion.width ); 
						
							if( motion.topIndex == undefined ) { motion.Action( 0 ); }
						
							motion.MotionTimer = setInterval( function() 
							{
								motion.clip -= offset;
								motion.hoster.css( 'background-position-x', motion.clip + 'px' );
							}, fps ); 
						}
						
						return motion;
					}, 
					
					Stop: function() 
					{
						var motion = this; 
						if( motion.MotionTimer != undefined ) 
						{
							motion.MotionTimer = clearInterval( motion.MotionTimer ); 
							motion.hoster.css( 'background-position-x', '0px' );
							delete motion.clip; 
							delete motion.MotionTimer;
						}
						return motion;
					}, 
					
					Pause: function() 
					{
						var motion = this; 
						if( motion.MotionTimer != undefined ) 
						{
							motion.MotionTimer = clearInterval( motion.MotionTimer );
							delete motion.MotionTimer;
						}
						return motion;
					}, 
					
					Action: function( topIndex ) 
					{
						if( topIndex == undefined ) 
						{
							topIndex = 0;
						}
						
						var motion = this;
						
						motion.topIndex = topIndex; 
						
						var topOffset = ( topIndex * parseInt( motion.height ) );
						motion.hoster.css( 'background-position-y', topOffset + 'px' );
						
						return motion;
					}
				}; 
				
				var scrollModifier = 
				{
					AddVelocity: function( x, y ) 
					{
						var motion = this;
						motion.velocityX += x;
						motion.velocityY += y;
						return motion;
					}, 
					
					AddVelocityX: function( value ) 
					{
						var motion = this;
						motion.velocityX += value;
						return motion;
					}, 
					
					AddVelocityY: function( value ) 
					{
						var motion = this;
						motion.velocityY += value;
						return motion;
					}, 
					
					Run: function( fps )
					{
						var motion = this; 
						if( motion.MotionTimer == undefined ) 
						{
							
							if( fps == undefined ) 
							{
								fps = 1000;
							}
							else 
							{
								fps = 1000/fps;
							} 
							
							if( motion.velocityX == undefined ) { motion.velocityX = 1; } 
							if( motion.velocityY == undefined ) { motion.velocityY = 0; } 
							if( motion.clipX == undefined ) { motion.clipX = 0; } 
							if( motion.clipY == undefined ) { motion.clipY = 0; } 
						
							motion.MotionTimer = setInterval( function() 
							{
								motion.clipX -= motion.velocityX;
								motion.clipY -= motion.velocityY;
								motion.hoster.css({
									'background-position-x': motion.clipX + 'px', 
									'background-position-y': motion.clipY + 'px' 
								});
							}, fps );
						} 
						
						return motion;
					}, 
					
					Stop: function() 
					{
						var motion = this; 
						if( motion.MotionTimer != undefined ) 
						{
							motion.MotionTimer = clearInterval( motion.MotionTimer ); 
							motion.hoster.css({ 'background-position': '0px 0px' });
							motion.clipX = 0;
							motion.clipY = 0; 
							delete motion.MotionTimer;
						} 
						return motion;
					}, 
					
					Pause: function() 
					{
						var motion = this; 
						if( motion.MotionTimer != undefined ) 
						{
							motion.MotionTimer = clearInterval( motion.MotionTimer ); 
							delete motion.MotionTimer; 
						}
						return motion;
					} 
				};
				
				var Motion = 
				{
					Sprite: function( width, height, imageURL ) 
					{
						var obj = 
						{
							width: width, 
							height: height, 
							imageURL: imageURL, 
							
							Effect: function( el ) 
							{
								el.MotionSprite = 
								{
									topIndex: 0, 
									width: width + 'px', 
									height: height + 'px', 
									backgroundImage: 'url(' + imageURL + ')', 
									backgroundRepeat: 'repeat', 
									backgroundPosition: 'left top', 
									hoster: el, 
								};
								el.css( el.MotionSprite ); 
								element5.Extend( el.MotionSprite, spriteModifier ); 
								return el;
							}
						};
						
						return element5.Extend( obj, spriteModifier ); 
					}, 
					Scroll: function( width, height, imageURL ) 
					{
						var obj = 
						{
							width: width, 
							height: height, 
							imageURL: imageURL, 
							
							Effect: function( el ) 
							{
								el.MotionScroll = 
								{
									width: width + 'px', 
									height: height + 'px', 
									backgroundImage: 'url(' + imageURL + ')', 
									backgroundRepeat: 'repeat', 
									backgroundPosition: 'left top', 
									hoster: el, 
								};
								el.css( el.MotionScroll ); 
								element5.Extend( el.MotionScroll, scrollModifier ); 
								return el;
							}
						};
						
						return element5.Extend( obj, scrollModifier ); 
					}
				};
				
				module.exports = Motion;
			},
			function( module, __webpack_require__ ) 		// pack require ( 5 )
			{
				// TODO
				var Media = 
				{
					StartCamera: function( video, width, height ) 
					{
						var mediaStream = 0;
						var webcamList = 0;
						var currentCam = null;
						
						function enumDeviceErrorHandle ( e )
						{
							if( e.name.indexOf ( 'NotFoundError' ) >= 0 ) 
							{
								console.error( 'Have not a camera found.' );
							} 
							else 
							{
								console.error( 'The following error occurred: ' + e.name + '. Please check your camera and try again.' );
							}
						} 
						
						function deviceChanged( e ) 
						{
							navigator.mediaDevices.removeEventListener( 'devicechange', deviceChanged );
							currentCam = null;
							init();
						} 
						
						function initializeVideoStream( stream ) 
						{
							mediaStream = stream; 
							
							video.srcObject = mediaStream; 
							
							if( video.paused ) 
							{
								video.play(); 
							}
						}
						
						function nextCamera() 
						{
							if( currentCam !== null ) 
							{
								currentCam++; 
								if( currentCam >= webcamList.length ) 
								{
									currentCam = 0;
								} 
								
								if( typeof video.srcObject !== undefined ) 
								{
									video.srcObject = null;
								} 
								video.src = null; 
								
								if( mediaStream ) 
								{
									var videoTracks = mediaStream.getVideoTracks(); 
									videoTracks[0].stop();
									mediaStream = 0;
								}
								
								navigator.mediaDevices.getUserMedia({
									video: {
										width: width, 
										height: height, 
										deviceId: { exact: webcamList[ currentCam ] }
									}
								}).then( initializeVideoStream ).catch( enumDeviceErrorHandle );
							}
						}
						
						function deviceEnumeratedHandle( devices ) 
						{
							webcamList = new Array(); 
							var len = devices.length;
							for( var i = 0; i < len; i++ ) 
							{
								if( devices[ i ].kind == 'videoinput' ) 
								{
									webcamList[ webcamList.length ] = devices[ i ].deviceId;
								}
							} 
							
							if( webcamList.length <= 0 ) 
								return;
							
							currentCam = 0;
							
							nextCamera();
							
							// TODO Media devicechange Event. 
							navigator.mediaDevices.addEventListener( 'devicechange' , deviceChanged );
						}
						
						function init() 
						{
							if( navigator.getUserMedia ) 
							{
								// Enumerate devices
								navigator.mediaDevices.enumerateDevices().then( deviceEnumeratedHandle ).catch( enumDeviceErrorHandle );
							} 
							else 
							{
								Media.IncludeWebRtc( init );
							}
						}
						
						if( !video.nextCamera ) 
						{
							video.nextCamera = nextCamera;
						} 
						
						init(); 
						
						return video;
					}, 
					
					IncludeWebRtc: function( callback ) 
					{
						if( !Media.include_webrtc_once ) 
						{
							var webrtc = document.createElement( 'script' );
							webrtc.async = true;
							webrtc.onload = function() 
							{
								if( callback != undefined ) 
								{
									callback();
								} 
								document.head.removeChild( webrtc );
							};
							webrtc.src = "/element5/webrtc/adapter.js";
							document.head.appendChild( webrtc ); 
							Media.include_webrtc_once = true;
						} 
					}, 
					
					StartMicrophone: function() 
					{
						var deviceList = 0;
						var deviceCurrent = null; 
						var mediaStream = 0;
						var webRtcSource = null;
						var audioContext = new ( window.AudioContext || window.webKitAudioContext )();
						
						function enumDeviceErrorHandle ( e )
						{
							if( e.name.indexOf ( 'NotFoundError' ) >= 0 ) 
							{
								console.error( 'Have not a microphone found.' );
							} 
							else 
							{
								console.error( 'The following error occurred: ' + e.name + '. Please check your camera and try again.' );
							}
						} 
						
						function deviceChanged( e ) 
						{
							navigator.mediaDevices.removeEventListener( 'devicechange', deviceChanged );
							init();
						} 
						
						function initializeAudioStream( stream ) 
						{
							mediaStream = stream; 
							
							webRtcSource = audioContext.createMediaStreamSource( stream ); 
							webRtcSource.connect( audioContext.destination ); 
						}
						
						function initSession() 
						{
							if( deviceCurrent !== null ) 
							{
								deviceCurrent++;
								
								if( deviceCurrent >= deviceList.length ) 
								{
									deviceCurrent = 0;
								} 
								
								clearSession();
								
								navigator.mediaDevices.getUserMedia( 
								{
									audio: {
										deviceId: { exact: deviceList[ deviceCurrent ] }
									} 
								}).then( initializeAudioStream ).catch( enumDeviceErrorHandle );
							} 
						}
						
						function clearSession() 
						{
							if( webRtcSource ) 
							{
								webRtcSource.disconnect();
								webRtcSource = null;
							} 
							
							if( mediaStream ) 
							{
								var audioTrack = mediaStream.getAudioTracks(); 
								audioTrack[ 0 ].stop();
								mediaStream = 0;
							}
						}
						
						function stopSession() 
						{
							clearSession();
						}
						
						function deviceEnumeratedHandle( devices ) 
						{
							deviceList = new Array(); 
							var len = devices.length;
							for( var i = 0; i < len; i++ ) 
							{
								if( devices[ i ].kind == 'audioinput' ) 
								{
									var hasDeviceId = false;
									
									if( deviceList.length ) 
									{
										for( var j = 0; j < deviceList.length; j++ ) 
										{
											if( deviceList[ j ] === devices[ i ].deviceId ) 
											{
												hasDeviceId = true;
												break;
											}
										}
									}
									
									if( !hasDeviceId ) 
									{
										deviceList[ deviceList.length ] = devices[ i ].deviceId; 
									}
								}
							} 
							
							if( deviceList.length <= 0 ) 
							{
								return; 
							}
							
							deviceCurrent = 0;
							
							initSession();
							
							// TODO Media devicechange Event. 
							navigator.mediaDevices.addEventListener( 'devicechange' , deviceChanged );
						}
						
						function init() 
						{
							if( navigator.getUserMedia ) 
							{
								// Enumerate devices
								navigator.mediaDevices.enumerateDevices().then( deviceEnumeratedHandle ).catch( enumDeviceErrorHandle );
							} 
							else 
							{
								Media.IncludeWebRtc( init );
							}
						}
						
						init(); 
						
						audioContext.stopSession = stopSession;
						audioContext.nextDevice = initSession;
						audioContext.numberDevice = function() 
						{
							return deviceList.length;
						};
						
						return audioContext;
					}
				};
				
				module.exports = Media;
			},
			function( module, __webpack_require__ )  		// pack require ( 5 ) 
			{
				var XHRModifier = 
				{
					onAbort: function( handle ) 
					{
						var xhr = this;
						xhr.addEventListener( 'abort', handle, false ); 
						return xhr;
					}, 
					onCancel: function( handle ) 
					{
						var xhr = this;
						xhr.addEventListener( 'abort', handle, false ); 
						return xhr;
					}, 
					onError: function( handle ) 
					{
						var xhr = this;
						xhr.addEventListener( 'error', handle, false ); 
						return xhr;
					}, 
					onFail: function( handle ) 
					{
						var xhr = this;
						xhr.addEventListener( 'error', handle, false );
						return xhr;
					}, 
					onStart: function( handle ) 
					{
						var xhr = this;
						xhr.addEventListener( 'loadstart', handle, false ); 
						return xhr;
					}, 
					onLoad: function( handle ) 
					{
						var xhr = this;
						xhr.addEventListener( 'load', handle, false );
						return this;
					}, 
					onFinish: function( handle ) 
					{
						var xhr = this;
						xhr.addEventListener( 'loadend', handle, false ); 
						return this;
					}, 
					onComplete: function( handle ) 
					{
						var xhr = this; 
						xhr.addEventListener( 'load', handle, false ); 
						return this;
					}, 
					onProgress: function( handle ) 
					{
						var xhr = this;
						xhr.addEventListener( 'progress', handle, false );
						return this;
					}, 
					onStateChange: function( handle ) 
					{
						var xhr = this; 
						xhr.addEventListener( 'readystatechange', handle, false ); 
						return this;
					}, 
					onTimeout: function( handle ) 
					{
						var xhr = this;
						xhr.addEventListener( 'timeout', handle, false ); 
						return this;
					}, 
					Connect: function( before, synchFlag ) 
					{
						synchFlag = synchFlag || true;
						var data = this.requestData;
						
						if( data ) 
						{
							this.open( 'post', this.requestUrl, synchFlag ); 
						} 
						else 
						{
							this.open( 'get', this.requestUrl, synchFlag );
						} 
						
						if( typeof data == 'object' ) 
						{
							if( !( data.__proto__.toString().indexOf( 'FormData' ) >= 0 ) )  
							{
								data = new FormData(); 
								var temp = this.requestData;
								
								for( x in temp ) 
								{
									data.append( x, temp[ x ] );
								}
							}
						} 
						else if ( typeof data == 'string' )
						{
							this.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded charset=utf-8' );
						}
						
						if( before ) 
						{						
							before.apply( this );
						} 
						
						return this.send( data );
					}, 
					Abort: function() 
					{
						this.abort();
						return this;
					}
				};
				
				var dataModifier = 
				{
					ReadVariables: function( text ) 
					{
						text = text || this.responseText;
						var pat = /([\w\_]+)=([^\&]+)/gi;
						var result = text.match( pat ); 
						if( result ) 
						{
							var data = new Object;
							result.forEach( function( item, index )
							{
								itemData = item.split( '=' );
								data[ itemData[ 0 ] ] = itemData[ 1 ];
							});
							return data;
						}
						else 
						{
							return result;
						}
					}, 
					ParseJSON: function( jsonText ) 
					{
						jsonText = jsonText || this.responseText; 
						return JSON.parse( jsonText );
					}, 
					ReadJSON: function( jsonText ) 
					{
						jsonText = jsonText || this.responseText;
						return JSON.parse( jsonText );
					}
				};
				
				var Request = 
				{
					Initialize : function( url, data ) 
					{
						var xhr = new XMLHttpRequest(); 
						xhr.requestUrl = url || 0; 
						xhr.requestData = data || 0; 
						element5.Extend( xhr, XHRModifier );
						element5.Extend( xhr, dataModifier );
						xhr.connect = xhr.Connect;
						return xhr;
					}, 
					
					Instance: function( url, data ) 
					{
						return Request.Initialize( url, data );
					}, 
					
					Connect: function( url, onload, data ) 
					{
						var origin = request5.Initialize( url, data );
						origin.onLoad( onload ); 
						origin.Connect();
						return origin;
					}, 
					
					LoadVariables: function( url, onload, data ) 
					{
						var xhr = request5.Connect( url, onload, data );
						element5.Extend( xhr, dataModifier );
						return xhr;
					}
				} 
				
				module.exports = Request;
			}, 
			function( module, __webpack_require__ ) 		// pack require ( 6 ) 
			{
				var Bom = 			// Browser Object Model.
				{
					Browser: 
					{
						// Opera 8.0+
						IsOpera: (function() 
						{
							return ((!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0);
						})(),
						
						// Firefox 1.0+ 
						IsFirefox: (function() 
						{
							return (typeof InstallTrigger !== 'undefined'); 
						})(), 
						
						// At least Safari 3+
						IsSafari: (function()
						{
							return (Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0);
						})(), 
						
						// Internet Explorer 6-11
						IsIE: (function()
						{
							return (/*@cc_on!@*/false || !!document.documentMode);
						})(),
						
						// Edge 20+
						IsEdge: (function()
						{
							return (!(/*@cc_on!@*/false || !!document.documentMode) && !!window.StyleMedia);
						})(), 
						
						// Chrome 1+
						IsChrome: (function()
						{
							return (!!window.chrome && !!window.chrome.webstore);
						})(), 
						
						// Blink engine detection
						IsBlink: (function()
						{
							return (((!!window.chrome && !!window.chrome.webstore) || ((!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0)) && !!window.CSS);
						})(), 
						
						IsOperaMini: (function()
						{
							return (navigator.userAgent.match(/Opera Mini/i));
						})(),
					}, 
					
					Device: 
					{
						IsAndroid: (function()
						{
							return (/android/i.test(navigator.userAgent.toLowerCase()));
						})(), 
						
						IsBlackBerry: (function()
						{
							return (/blackberry/i.test(navigator.userAgent.toLowerCase()));
						})(),
						
						IsiOs: (function()
						{
							return (/ipad|iphone|ipod/i.test(navigator.userAgent.toLowerCase())); 
						})(), 
						
						IsiPhone: (function()
						{
							return (/iphone/i.test(navigator.userAgent.toLowerCase()));
						})(), 
						
						IsiPad: (function()
						{
							return (/ipad/i.test(navigator.userAgent.toLowerCase()));
						})(), 
						
						IsiPos: (function()
						{
							return (/ipod/i.test(navigator.userAgent.toLowerCase()));
						})(), 
						
						IsWP: (function()
						{
							return (/windows phone/i.test(navigator.userAgent.toLowerCase()));
						})(), 
						
						IsWebOS: (function()
						{
							return (/webos/i.test(navigator.userAgent.toLowerCase()));
						})(), 
						
						IsMobile: (function()
						{
							return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)));
						})(), 
					}
				};
				
				module.exports = Bom;
			}, 
			function( module, __webpack_require__ ) 		// pack require ( 7 ) 
			{
				// TODO: 
				var PromiseImplement = 
				{
					id: '', 
					err: '', 
					
					Catch: function( callback ) 
					{
						if( callback ) 
						{
							callback( err );
						}
					}, 
					
					Then: function( callback ) 
					{
						if( callback ) 
						{
							callback( this.id ); 
						}
					},
				}; 
				
				var IdentityImplement = 
				{
					entityName: '', 
					subEntList: '', 
					
					SetName: function() 
					{
						
					}, 
					
					GetName: function() 
					{
						
					}, 
					
					Rename: function() 
					{
						
					}, 
				};
				
				var DatabaseImplement = 
				{
					
				};

				var TableImplement = 
				{
					insert: function(  ) 
					{
						
					}, 
					update: function(  ) 
					{
						
					}, 
					select: function(  ) 
					{
						
					}, 
					delete: function( ) 
					{
						
					}, 
					alter: function(  ) 
					{
						
					}, 
					count: function(  ) 
					{
						
					}, 
				};
				
				var storageTypes = 
				[
					['expire_ds', 	'ExpDS', 		'ExpireDataSim', 	'strict_ds',  'cookie_ds'		], 		// Cookie DataStorage Simulator.
					['local_ds', 	'LocDS', 		'LocalDataSim'		], 		// LocalStorage DataStorage Simulator.
					['session_ds', 	'SesDS', 		'SessionDataSim'	], 		// SessionStorage DataStorage Simulator.
					['app_ds', 		'AppDS', 		'ApplicationDataSim'],		// ApplicationStorage DataStorage Simulator.
					['indexed_db', 	'IndexedDB',	'IndexedDatabase'	], 		// IndexedDB Database Technology.
					['client_db', 	'ClientDB', 	'ClientDatabase'	] 		// Web Database Technology.
				]; 
				var numberOfType = storageTypes.length;
				var current;
				var fieldType = [ ':number', ':string', ':boolean', ':object', ':prototype' ];
				fieldType.buffNumber = function( fieldName ) 
				{
					console.log( 'field name: ' + fieldName ); 
					console.log( this );
				} 
				
				function GetTypeRequest( storageType ) 
				{
					for( var i = 0; i < numberOfType; i++ ) 
					{
						var lenj = storageTypes[ i ].length;
						for( var j = 0; j < lenj; j++ ) 
						{
							if( storageTypes[ i ][ j ].indexOf( storageType ) >= 0) 
							{
								current = i;
								break;
							}
						}
					}								
					
					return ( current == numberOfType ); 
				}
				
				var Store = 
				{
					interface: function( storageType ) 
					{
						if( GetTypeRequest( storageType ) ) 
						{
							return false;
						} 
						
						var storageType = storageTypes[ current ][ 2 ]; 
						
						switch( storageType ) 
						{								
							case 'IndexedDatabase':
								window.URL = window.URL || window.webkitURL
								window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
								var indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.OIndexedDB || window.msIndexedDB;
								IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.OIDBTransaction || window.msIDBTransaction;
								return indexedDB;
							
							case 'LocalDataSim': 
								return localStorage;
								
							case 'SessionDataSim':
								return sessionStorage;
							
							default:
								return null;
						}
					},
					Open: function( storageType ) 
					{
						try 
						{
							if( arguments.length <= 0 ) throw "storageType is undefined."; 
							
							if( GetTypeRequest( storageType ) ) 
							{
								return false;
							} 
							
							// Open new a database.
							var storageType = storageTypes[ current ][ 2 ]; 
							var dbName;
							///////////////////////////////////
							var secondUnit = 1000;
							var minuteUnit = 60 * secondUnit;
							var hourUnit = 60 * minuteUnit;
							var dayUnit = 24 * hourUnit;
							var yearUnit = 365 * dayUnit;
							///////////////////////////////////
							function getExpireString( time, unit ) 
							{
								unit = unit || secondUnit;
								var expires;
								var y = new Date(); 
								y.setTime( y.getTime() + ( time ) * unit );
								expires = y.toUTCString(); 
								return expires;
							} 
							
							function getExpireDate( time, unit ) 
							{
								unit = unit || secondUnit;
								var expires;
								var d = new Date(); 
								d.setTime( d.getTime() + ( time ) * unit );
								return d;
							} 
							
							switch( storageType ) 
							{
								case 'ExpireDataSim': 	// Using Cookie store.
									return suftByExpireDS(); 
									
								case 'LocalDataSim': 	// Using local store.
									return suftByLocalDS(); 
									
								case 'SessionDataSim':	// Using session store.
									return suftBySessionDS(); 
									break;
								
								case 'ApplicationDataSim': 
									// TODO : Check cross-browser.
									break; 
									
								case 'IndexedDatabase': // Apply the IndexedDB. crossed-browser. 
									if( arguments.length < 2 ) 
									{
										throw "dbName is undefined."; 
									}
									dbName = arguments[ 1 ]; 
									dbVersion = arguments[ 2 ]; 
									return suftByIndexedDB(); 
									
								case 'ClientDatabase': 	// Apply the clientDB.
									return suftByClientDB(); 
							} 
							
							function suftByExpireDS() 
							{
								if( storageType != 'ExpireDataSim' ) 
								{
									return;
								} 
								
								var key = null;
								var value = null;
								var domain = window.location.hostname;
								var db_name = domain;
								var branch = window.location.pathname.slice( 0, location.pathname.length-1 );
								var expires = 0; 
								var records = 0;
								var flatform = window.location.hostname;
								
								function initDB() 
								{
									var infosStr = [
										'flatform=' + db_name, 
										'domain=' + domain, 
										'expires=' + getExpireString( 1, yearUnit ), 	// seconds
										'path=/', 			// Global store.
									];
									document.cookie = infosStr.join( '; ' ); 
								} 
								
								function loadDB() 
								{
									var records = document.cookie.split( '; ' );
									
									var len = records.length;
									
									for ( var i = 0; i < len; i++ ) 
									{
										var split = ( /^(.*)=(.*)$/ ) . exec ( records[ i ] );
										
										var key = split[ 1 ], 
											value = split[ 2 ];
											
										if( ( /^[\{\[].*[\}\]]$/ ) . exec ( value ) ) 
										{
											value = JSON.parse( value );
										}
										
										records[ i ] = 
										{
											key : split[ 1 ], 
											value: value
										};
									} 
									
									return records;
								}
								
								if( document.cookie === '' ) 
								{
									console.log( 'Initialize the Database!' );
									initDB();
								} 
								else 
								{
									console.log( 'DS has exist. All Ready!!!' );
									records = loadDB();
								} 
								
								var recordModifier = 
								{
									GetValue: function() 
									{
										var record = this;
										if( record.destroyed )
										{
											return;
										}
										return record.value.data;
									}, 
									
									Destroy: function() 
									{
										var record = this;
										
										if( record.destroyed )
										{
											return;
										}
										
										record.destroyed = true;
										
										var cookieString = 
										[
											record.key + '=-1', 
											'expires=' + getExpireString( -10 ), 
											'path=' + record.value.meta.branch, 
										].join( '; ' );
																				
										document.cookie = cookieString; 
										
										if( record.value.meta.branch == "/" )
											delete coreDS.Public[ record.key ]; 
										else 
											delete coreDS.Private[ record.key ]; 
									}, 
									
									SetValue: function( data )
									{
										var record = this; 
										
										try 
										{
											if( record.destroyed ) throw "This item had been destroyed.";
										}
										catch( err ) 
										{
											if( console.error ) 
											{
												console.error( err );
											}
											else 
											{
												console.log( err );
											}
											return;
										}
										
										record.value.data = data;
										
										var cookieString = 
										[
											record.key + '=' + JSON.stringify( record.value ), 
											'expires=' + record.value.meta.expires, 
											'path=' + record.value.meta.branch, 
										].join( '; ' );
																				
										document.cookie = cookieString; 
									}
								};
								
								var coreDS = 
								{
									Key: function( name ) 
									{
										var myCore = this;
										key = name.toString(); 
										return myCore;
									}, 
									
									SetKey: function( name ) 
									{
										var myCore = this;
										return myCore.Key( name ); 
									}, 
									
									GetKeyValue: function() 
									{
										if( key ) 
										{
											return key; 
										} 
										else 
										{
											return;
										}
									}, 
									
									Data: function( data ) 
									{
										var myCore = this;
										value = data; 
										return myCore;
									},
									
									SetData: function( data ) 
									{
										var myCore = this;
										return myCore.Value( data ); 
									}, 
									
									GetDataValue: function() 
									{
										return value; 
									}, 
									
									Expires: function( time ) 
									{
										var myCore = this;
										expires = getExpireString( time ); 
										return myCore;
									},
									
									SetExpires: function( time ) 
									{
										var myCore = this;
										return myCore.Expires( time ); 
									}, 
									
									GetExpiresValue: function( time ) 
									{
										return expires;
									}, 
									
									Branch: function( scope ) 
									{
										var myCore = this; 
										branch = scope;
										return myCore;
									}, 
									
									SetBranch: function( scope ) 
									{
										var myCore = this;
										return myCore.Branch( scope );
									}, 
									
									GetBranch: function() 
									{
										return branch;
									}, 
									
									Insert: function( queryString ) { return 'id, key, value, branch, expires, timestamp from here where id = 10 limit 10, 19'; }, 
									Update: function( queryString ) { return '(key, value, expires, timestamp) values ( username, Huy Cuong, 3 days, current ) from here'; }, 
									Select: function( queryString ) { return 'key = username, value = Huy Cuong from here where id = 10'; }, 
									Delete: function( queryString ) { return 'from here where id = 10'; }, 
									Empty: function( queryString ) { return 'from here'; }, 
									Query: function( queryString ) { return 'select: * from here where id = 1 limit 10'; }, 
									Custom: function( cookieString ) { return '01={}, path=/, expires=UTCString'; }, 
									
									Public: function() 
									{
										var key = arguments[ 0 ], 
											value = arguments[ 1 ], 
											expires = arguments[ 2 ];
											
										var myCore = this;
										
										if( arguments.length == 1 ) 
										{
											records = loadDB();
											var len = records.length;
											for ( var i = 0; i < len; i++ ) 
											{
												var item = records[ i ];
												if( item.key == key && item.value.meta.branch == "/" ) 
												{
													if( myCore.Public[ key ] == undefined ) 
													{
														myCore.Public[ key ] = element5.Extend( item, recordModifier );
													}
													return myCore.Public[ key ]; 
												}
											}
											if( myCore.Public[ key ] != undefined ) 
											{
												myCore.Public[ key ].Destroy();
											}
											return;
										} 
										else if( arguments.length == 0 ) 
										{
											return myCore;
										}
										
										var data = 
										{
											'meta': { 'branch':'/', 'expires': ( function() 
											{
												if( expires != undefined ) 
												{
													return getExpireString( expires );
												} 
												else 
												{
													return 'Session';
												}
											})(), 'timestamp' : ( function() 
											{
												var time = new Date();
												return time.getTime();
											})()},
											'data' : value, 
										}; 
										
										var record = { 'key': key, 'value': data };
										
										var cookieString = [
											key + '=' + JSON.stringify( data ), 
											'expires=' + data.meta.expires, 
											'path=/', 
										].join( '; ' );
																				
										document.cookie = cookieString; 
										
										return myCore.Public[ key ] = element5.Extend( record, recordModifier );;
									}, 
									
									Private: function() 
									{
										var key = arguments[ 0 ], 
											value = arguments[ 1 ], 
											expires = arguments[ 2 ]; 
										
										var myCore = this;
										
										if( arguments.length == 1 ) 
										{
											if( myCore.Private[ key ] != undefined ) 
											{
												return myCore.Private[ key ];
											}
											
											var len = records.length;
											
											for ( var i = 0; i < len; i++ ) 
											{
												if( records[ i ].key == key && records[ i ].value.meta.branch == branch ) 
												{
													return myCore.Private[ key ] = element5.Extend( records[ i ], recordModifier );
												}
											}
											return;
										} 
										else if( arguments.length == 0 ) 
										{
											return myCore;
										} 
										
										var data = 
										{
											'meta': { 'branch':branch, 'expires': ( function() 
											{
												if( expires != undefined ) 
												{
													return getExpireString( expires );
												} 
												else 
												{
													return 'Session';
												}
											})(), 'timestamp' : ( function() 
											{
												var time = new Date();
												return time.getTime();
											})()},
											'data' : value, 
										}; 
										
										var record = { 'key': key, 'value': data };
										
										var cookieString = [
											key + '=' + JSON.stringify( data ), 
											'expires=' + data.meta.expires, 
											'path=' + branch, 
										].join( '; ' );
																				
										document.cookie = cookieString;
										
										return myCore.Private[ key ] = element5.Extend( record, recordModifier );;
									}, 
								}; 
								
								coreDS.select = coreDS.Select;
								coreDS.insert = coreDS.Insert;
								coreDS.update = coreDS.Update;
								coreDS.delete = coreDS.Delete;
								coreDS.empty = coreDS.Empty;
								coreDS.query = coreDS.Query;
								coreDS.custom = coreDS.Custom;
								coreDS.public = coreDS.Public;
								coreDS.private = coreDS.Private;
								
								return coreDS;
							}
							
							function suftByLocalDS() 
							{
								/*
								 * Database with unsecuries commendation.
								 */
								if( storageType != 'LocalDataSim' && storageType != 'SessionDataSim' ) 
								{
									return;
								} 
								else 
								{
									var storageAdapter = ( storageType != 'LocalDataSim' ) ? sessionStorage : localStorage;
								}
								
								var flatform = window.location.hostname;
								var domain = window.location.hostname;
								var branch = window.location.pathname.slice( 0, location.pathname.length-1 );
								var records = 0;
								
								var DSDescription =
								{
									'lds_flatform': ( storageAdapter == localStorage ) ? 'LDSim' : 'SDSim', 
									'lds_prefix': 'lds_',
									'lds_initBranch': branch, 
									'lds_autoIncrement': 0, 
									'lds_initTime': ( function() 
									{
										var dt = new Date();
										return dt.getTime();
									})(), 
								}; 
								
								function getFlatform() 
								{
									return storageAdapter.getItem( 'lds_flatform' );
								} 
								
								function setFlatform( value ) 
								{
									if( storageAdapter.getItem( 'lds_flatform' ) )
										storageAdapter.setItem( 'lds_flatform', value ); 
								} 
								
								function getAutoIncrement() 
								{
									var autoIncrement = storageAdapter.getItem( 'lds_autoIncrement' );
									if( autoIncrement != undefined ) 
									{
										return parseInt( autoIncrement );
									} 
								} 
								
								function getTime() 
								{
									var time = storageAdapter.getItem( 'lds_initTime' ); 
									if( time != undefined ) 
									{
										return parseInt( time );
									}
								} 
								
								function getBranch() 
								{
									return storageAdapter.getItem( 'lds_initBranch' ); 
								} 
								
								function getPrefix() 
								{
									return storageAdapter.getItem( 'lds_prefix' ); 
								}

								var format = [
									getFlatform(), 
									getAutoIncrement(), 
									getTime(), 
									getBranch(), 
									getPrefix() 
								];					
								
								function checkFormat() 
								{
									for( var i = 0; i < format.length; i++ ) 
									{
										if( format[ i ] === undefined ) 
										{
											return false;
										}
									} 
									return true;
								}
								
								function autoIncrement() 
								{
									var autoIncrement = getAutoIncrement(); 
									if( autoIncrement != undefined ) 
									{
										autoIncrement += 1;
										storageAdapter.setItem( 'lds_autoIncrement',  autoIncrement );
										return autoIncrement;
									} 
									return 0; 
								} 
								
								var variableModifier = 
								{
									Remove: function() 
									{
										var item = this;
										if( item.removed ) 
										{
											return;
										}
										item.removed = true;
										keyInput = 'lds_id ' + item.id + ' ' + item.key; 
										storageAdapter.removeItem( keyInput );
									}, 
									GetValue: function() 
									{
										var item = this;
										if( item.removed ) 
										{
											return;
										}
										return item.value.value.data;
									}, 
									SetValue: function( data ) 
									{
										var item = this;
										if( item.removed ) 
										{
											return;
										}
										keyInput = 'lds_id ' + item.id + ' ' + item.key; 
										item.value.value.data = data; 
										storageAdapter.setItem( keyInput, JSON.stringify( item.value ) );
										return item;
									}
								}
								
								var coreDS = 
								{
									Public: function() 
									{
										var key = arguments[ 0 ], 
											value = arguments[ 1 ], 
											expires = arguments[ 2 ];
										
										if( expires ) 
										{
											expires = parseInt( expires );
										} 
										else 
										{
											expires = 'imexpire';
										}
										
										var myCore = this;
										
										if( arguments.length == 0 ) 
										{
											return myCore; 
										} 
										
										var item;
										var len = records.length; 
										var dataInput = 0;
										var keyId = 0;
										var keyInput = 0;
										
										if( myCore.Public[ key ] != undefined )  
										{
											if( arguments.length == 1 ) 
											{
												return myCore.Public[ key ];
											}
											else 
											{
												item = myCore.Public[ key ];
												keyInput = 'lds_id ' + item.id + ' ' + item.key; 
												dataInput = item.value;
											} 
										} 
										
										for( var i = 0; i < len; i++ ) 
										{
											if( records[ i ] == undefined ) 
											{
												continue;
											} 
											
											item = records[ i ]; 
											var scope = item.value.value.meta.branch;
											
											if( item.key == key && scope == '/' ) 
											{
												if( arguments.length == 1 ) 
												{
													return myCore.Public[ key ] = element5.Extend( item, variableModifier );
												}
												else 
												{
													keyInput = 'lds_id ' + item.id + ' ' + item.key; 
													dataInput = item.value;
													break;
												}
											}
										}
										
										if( arguments.length == 1 ) return;
										if( value == undefined ) 
										{
											return;
										}
										
										if( !keyInput && !dataInput ) 
										{
											keyId = autoIncrement();
											keyInput = 'lds_id ' + keyId + ' ' + key;
											dataInput =  
											{ 
												key: key, 
												value: 
												{
													meta: 
													{ 
														branch: '/', 
														timestamp: ( function() 
														{
															var d = new Date();
															return d.getTime();
														})(), 
														expires: expires,
													}, 
													data: value
												} 
											}; 
											
											item = 
											{
												id: keyId, 
												key: key, 
												value: dataInput
											}; 
										} 
										else 
										{
											dataInput.value.data = value;
										} 

										
										storageAdapter.setItem( keyInput, JSON.stringify( dataInput ) ); 
										
										return myCore.Public[ key ] = element5.Extend( item, variableModifier ); 
									}, 
									
									Private: function() 
									{
										var key = arguments[ 0 ], 
											value = arguments[ 1 ] || '', 
											expires = arguments[ 2 ];
										
										if( expires ) 
										{
											expires = parseInt( expires );
										} 
										else 
										{
											expires = 'imexpire';
										}
										
										var myCore = this;
										
										if( arguments.length == 0 ) 
										{
											return myCore; 
										} 
										
										var len = records.length; 
										var dataInput = 0;
										var keyId = 0;
										var keyInput = 0;
										var item;
										if( myCore.Private[ key ] != undefined )  
										{
											if( arguments.length == 1 ) 
											{
												return myCore.Private[ key ];
											}
											else 
											{
												item = myCore.Private[ key ];
												keyInput = 'lds_id ' + item.id + ' ' + item.key; 
												dataInput = item.value;
											} 
										} 
										
										for( var i = 0; i < len; i++ ) 
										{
											if( records[ i ] == undefined ) 
											{
												continue;
											} 
											
											item = records[ i ]; 
											var scope = item.value.value.meta.branch;
											
											if( item.key == key && scope == branch ) 
											{
												if( arguments.length == 1 ) 
												{
													return myCore.Private[ key ] = element5.Extend( item, variableModifier );
												}
												else 
												{
													keyInput = 'lds_id ' + item.id + ' ' + item.key; 
													dataInput = item.value; 
													break;
												}
											}
										} 
										
										if( arguments.length == 1 ) return;
										if( value == undefined ) 
										{
											return;
										}

										if( !keyInput && !dataInput ) 
										{
											keyId = autoIncrement();
											keyInput = 'lds_id ' + keyId + ' ' + key;
											dataInput =  
											{ 
												key: key, 
												value: 
												{
													meta: 
													{ 
														branch: branch, 
														timestamp: ( function() 
														{
															var d = new Date();
															return d.getTime();
														})(), 
														expires: expires,
													}, 
													data: value
												} 
											}; 
											
											item = 
											{
												id: keyId, 
												key: key, 
												value: dataInput
											};
										} 
										else 
										{
											dataInput.value.data = value;
										}
										
										storageAdapter.setItem( keyInput, JSON.stringify( dataInput ) ); 
										
										return myCore.Private[ key ] = element5.Extend( item, variableModifier ); 
									}, 
									
									Empty: function() 
									{
										//storageAdapter
									}
								};
								
								coreDS.public = coreDS.Public; 
								coreDS.private = coreDS.Private; 
								
								function initDB() 
								{
									element5.Extend( storageAdapter, DSDescription ); 
									return loadDB();
								} 
								
								function loadDB() 
								{
									var records = new Array();
									
									var len = storageAdapter.length;  
									
									for( var i = 0; i < len; i++ ) 
									{
										var id, item;
										var key = storageAdapter.key( i );
										var value = storageAdapter.getItem( key ); 
										var pat = ( /^lds_id (\d+) (.*)/ ) . exec ( key );
										if( pat != null ) 
										{
											id = parseInt( pat[ 1 ] );
											key = pat[ 2 ]; 
											item = 
											{
												id : parseInt( pat[ 1 ] ), 
												key: pat[ 2 ], 
												value: JSON.parse( value ), 
											};
											
											records.push( item );
											var scope = item.value.value.meta.branch;
											if( scope == '/' || scope == branch ) 
											{ 
												coreDS.Public[ key ] = element5.Extend( item, variableModifier );
											}
										}
									}
									return records;
								} 
								
								if( checkFormat() ) 
								{
									records = loadDB();
								} 
								else 
								{
									records = initDB();
								} 
								
								return element5.Extend( DSDescription, coreDS );
							}
							
							function suftBySessionDS() 
							{
								if( storageType != 'SessionDataSim' ) 
								{
									return;
								} 
								suftByLocalDS( storageType );
							}
							
							function suftByIndexedDB() 
							{
								if( storageType != 'IndexedDatabase' ) 
								{
									return;
								} 
								else if( indexedDB == undefined )
								{
									indexedDB = store5.interface();
								} 
								
								if( !IDBTransaction.READ_WRITE ) 
								{
									IDBTransaction.READ_WRITE = 'readwrite';
								} 
								
								if( !IDBTransaction.READ_ONLY ) 
								{
									IDBTransaction.READ_ONLY = 'readonly';
								}
								
								var request, db;
								
								if( dbVersion ) 
								{
									request = indexedDB.open( dbName, dbVersion ); 
								} 
								else 
								{
									request = indexedDB.open( dbName ); 
								}
								
								var databaseModifier = 
								{
									GetTable: function() 
									{
										var tableName = arguments[ 0 ]; 
										var method = arguments[ 1 ] || IDBTransaction.READ_WRITE;
										if( this.objectStoreNames.contains (tableName) )
										{
											var transaction = this.transaction( tableName, method );
											return transaction.objectStore( tableName ); 
										} 
										return 0;								
									}, 
									From: function() 
									{
										return this.GetTable.apply( this, arguments );
									}, 
									from: function() 
									{
										return this.GetTable.apply( this, arguments );
									},
								}
								
								var CoreDB = 
								{
									close: function() 
									{
										var myCore = this;
										db.close(); 
										return myCore;
									}, 
									init: function() 
									{
										var myCore = this; 
										request.tables = arguments;
										return myCore;
									}, 
									drop: function() 
									{
										var myCore = this;
										
										db.close();
										
										var request = indexedDB.deleteDatabase( db.name ); 
										
										request.onsuccess = function( e ) 
										{
											console.log( "Database deleted." );
										}; 
										
										request.onerror = function( e ) 
										{
											console.log( "Database deleting is failure!" );
										};
										
										return myCore;
									}, 
									upgrade: function() 
									{
										var myCore = this; 
										
										db.close(); 
										
										var connect = request.connect;
										
										var args = Array.from(arguments); 
										
										var upgradeVersion = args.splice( 0, 1 ) [ 0 ]; 
										
										request = store5.open( 'indexed_db', 'program', upgradeVersion ); 
										
										myCore.init.apply( request, args.splice( 0 ) ); 
										
										if( connect ) 
										{
											request.connect = connect;
										}
										
										return request;
									}
								};
								
								request.addEventListener( 'upgradeneeded', function( e ) 
								{
									if( request.tables != undefined ) 
									{
										db = e.target.result;
										var len = request.tables.length;
										for( var i = 0; i < len; i++ ) 
										{
											var item = request.tables[ i ]; 
											
											if( db.objectStoreNames.contains( item.name ) )
											{
												db.deleteObjectStore( item.name );
												if( item.key == undefined )
												{
													continue;
												}
											} 
											
											var objectStore = db.createObjectStore( item.name, { keyPath: item.key } ); 
											
											var lenj = item.structure.length;
											for( var j = 0; j < lenj; j++ ) 
											{
												var index = item.structure[ j ];
												objectStore.createIndex( index.name, index.key, index.types );
											} 
										} 
										delete request.tables;
									}
									
								}, false );
								
								request.addEventListener( 'error', function( e ) 
								{
									console.log( 'Connect Database Fail!' );
								});

								request.addEventListener( 'success', function( e ) 
								{
									db = e.target.result; 
									
									if( request.connect ) 
									{
										var callback = request.connect;
										
										if( typeof callback != 'function' ) throw "The connect must be a function.";
										
										callback.call( element5.Extend( db, databaseModifier ) );
									}
								}, false ); 
								
								CoreDB.Init = CoreDB.init;
								CoreDB.Close = CoreDB.close;
								CoreDB.Drop = CoreDB.drop;
								CoreDB.Upgrade = CoreDB.upgrade;
								
								return element5.Extend( request, CoreDB );
							}
							
							function suftByClientDB() 
							{
								if( storageType != 'ClientDatabase' ) 
								{
									return;
								}
								console.log( storageType );
							}
							
							return;
							
							Store[ storageTypes[ len ][ 2 ] ] = new Array(); 
							
							var database = new Array(); 
							
							database.cdb5_name = 'test'; 
							database.cdb5_chemmaset = 
							[ 
								'schools', 
								'students' 
							]; 
							
							var schoolTable = new Array(); 
							schoolTable.cdb5_name = 'school';
							schoolTable.cdb5_chemmaset = 
							[ 
								'id:number:16', 
								'name:string:11', 
								'address:string:127',
							]; 
							
							schoolTable . insert = function ( ) 
							{
								console.log( this );
							};
							
							database[ 'cdb5_table_schools' ] = schoolTable;
							
							Store[ 'ClientDB' ].push( database ); 
							
							return Store[ 'ClientDB' ];
						} 
						catch( err ) 
						{
							if( console.error ) 
								console.error( err ); 
							else 
								console.log( err ); 
							return; 
						} 
					}
				}; 
				
				module.exports = Store;
			}, 
			function( module, __webpack_require__ ) 		// pack require ( 8 ) 
			{
				var Geo = (function( obj ) 
				{
					return new (function GeoClass () 
					{
						this.__proto__ = obj.__proto__; 
						this.position = 0;
						this.onDetectHandle = 0; 
						
						this.Settings = 
						{
							enableHighAccuracy: true,
							timeout: 5000,
							maximumAge: 0
						};
						
						this.onDetect = function( detectionEventHandle ) 
						{
							this.onDetectHandle = detectionEventHandle; 
							return this;
						};
						
						this.onChange = function( changeEventHandle ) 
						{
							this.watchPosition( changeEventHandle ); 
							return this;
						}; 
						
						this.Reset = function() 
						{
							this.position = 0;
							this.onDetectHandle = 0;
							this.clearWatch();
							return this;
						}; 
						
						this.GetLocation = function() 
						{
							function success ( pos ) 
							{
								geo5.position = pos; 

								if( geo5.onDetectHandle ) 
								{
									var callback = ( geo5.onDetectHandle )( geo5 );
								} 

								return geo5;
							} 
							
							function error ( err ) 
							{
								console.warn( 'ERROR(' + err.code + '): ' + err.message ); 
							}
							
							var position = obj.getCurrentPosition( success, error ); 
							
							return this; 
						}; 
						
						this.ScanWith = function( success, error, options ) 
						{
							// Init the new Settings.
							var settings = {}; 
							
							var ssuccess = function( pos ) 
							{
								// Loop via the options of settings
								for( var x in options ) 
								{
									geo5.Settings[ x ] = options[ x ];	// Re-Assign the values of settings.
								} 
								
								if( success ) 
								{
									var callback = success;
									callback( pos );
								}
							};
							
							this.getCurrentPosition( ssuccess, error, options ); 
							return this;
						}; 
						
						this.ShowMyPositionOnMap = function() 
						{
							var latlon = this.position.coords.latitude + "," + this.position.coords.longitude;
							return "https://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=17&size=400x300&sensor=false";
						}; 
						
						this.onDetectPosition = this.onDetect;
						this.onChangePosition = this.onChange;
						this.GetPosition = this.GetLocation;
						this.GetCurrentPosition = this.GetLocation;
						this.GetCurrentLocation = this.GetLocation; 
						this.Scan = this.GetLocation; 
					})();
				})( navigator.geolocation ); 
				
				module.exports = Geo;
			}, 
			function( module, __webpack_require__ ) 		// pack require ( 9 ) 
			{
				Array.prototype.clone = function() 
				{
					return this.slice(0);
				};
				
				var Solution = 
				{
					SetMutationEvent: (function()
					{
						var MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
							eventListenerSupported = window.addEventListener;
						
						return function(obj, addDomHandle, removeDomHandle)
						{
							if(MutationObserver)
							{
								// define a new observer
								var obs = new MutationObserver( function( mutations, observer ) 
								{
									mutations.forEach( function( item, index ) 
									{
										if( item.addedNodes.length 
										&&  item.addedNodes[0] . nodeType == 1 
										&& 	addDomHandle != undefined ) 
										{
											var customEvent = 
											{
												target : item.addedNodes[0], 
												srcElement : item.addedNodes[0], 
												observe : observer, 
											};
											addDomHandle( customEvent );
										} 
										else if ( item.removedNodes.length 
										&&	item.removedNodes[0] . nodeType == 1 
										&& 	removeDomHandle != undefined ) 
										{
											var customEvent = 
											{
												target : item.removedNodes[0], 
												srcElement : item.removedNodes[0], 
												observe : observer, 
											}; 
											
											// Meet observer.disconnect();
											
											removeDomHandle( customEvent );
										}
									}); 
								});
								// have the observer observe foo for changes in children
								obs.observe( obj, { childList:true, subtree:true });
							}
							else if(eventListenerSupported)
							{
								obj.addEventListener('DOMNodeInserted', addDomHandle, false);
								obj.addEventListener('DOMNodeRemoved', removeDomHandle, false);
							}
						}
					})(), 
					
					// Not documentation
					Watch: (function() 
					{
						function _extendArray(arr, callback, framework) {
							if (arr.__wasExtended === true) return;

							function generateOverloadedFunction(target, methodName, self) {
								return function () {
									var oldValue = Array.prototype.concat.apply(target);
									var newValue = Array.prototype[methodName].apply(target, arguments);
									target.updated(oldValue, motive);
									return newValue;
								};
							}
							arr.updated = function (oldValue, self) {
								callback.call(this, 'items', oldValue, this, motive);
							};
							motive = undefined || 'motive';
							arr.concat = generateOverloadedFunction(arr, 'concat', motive);
							arr.join = generateOverloadedFunction(arr, 'join', motive);
							arr.pop = generateOverloadedFunction(arr, 'pop', motive);
							arr.push = generateOverloadedFunction(arr, 'push', motive);
							arr.reverse = generateOverloadedFunction(arr, 'reverse', motive);
							arr.shift = generateOverloadedFunction(arr, 'shift', motive);
							arr.slice = generateOverloadedFunction(arr, 'slice', motive);
							arr.sort = generateOverloadedFunction(arr, 'sort', motive);
							arr.splice = generateOverloadedFunction(arr, 'splice', motive);
							arr.unshift = generateOverloadedFunction(arr, 'unshift', motive);
							arr.__wasExtended = true;

							return arr;
						}
						
						return function(target, prop, handler) 
						{
							if (target.__lookupGetter__(prop) != null) {
								return true;
							}
							var oldval = target[prop],
								newval = oldval,
								self = this,
								getter = function () {
									return newval;
								},
								setter = function (val) {
									if (Object.prototype.toString.call(val) === '[object Array]') {
										val = _extendArray(val, handler, self);
									}
									oldval = newval;
									newval = val;
									handler.call(target, prop, oldval, val);
								};
							if (delete target[prop]) { // can't watch constants
								if (Object.defineProperty) { // ECMAScript 5
									Object.defineProperty(target, prop, {
										get: getter,
										set: setter,
										enumerable: false,
										configurable: true
									});
								} else if (Object.prototype.__defineGetter__ && Object.prototype.__defineSetter__) { // legacy
									Object.prototype.__defineGetter__.call(target, prop, getter);
									Object.prototype.__defineSetter__.call(target, prop, setter);
								}
							}
							return this;
						};
					})(),
					
					// Not Documentation
					Unwatch: ( function() 
					{
						return function(target, prop) 
						{
							var val = target[prop];
							delete target[prop]; // remove accessors
							target[prop] = val;
							return this;
						};
					})(),
					
					Routing: ( function() 
					{
						return ( function() 
						{
							var agrs = Array.from( arguments ), routes, d = arguments[ arguments.length - 1 ], a = arguments[ 0 ];
							if( d instanceof Function ) 
							{
								routes = agrs.splice( 0, agrs.length-1 );
							} 
							else 
							{
								d = undefined;
								routes = agrs;
							}
							
							if( a.__vmodel ) 
							{
								routes = routes.splice( a.__vmodel );
							}
							
							var f = function() 
							{
								var hash = window.location.hash, vars;
								if( hash.indexOf( '{' ) > -1 && hash.lastIndexOf( '}' ) > -1 ) 
								{
									vars = hash.slice( hash.indexOf( '{' ) + 1, hash.lastIndexOf( '}' ) );
								}
								
								hash = (vars) ? hash.slice( 0, hash.indexOf( '{' ) ) : hash;
								
								var route = routes.filter( function( c ) 
								{
									return hash === c.hash;
								});
								
								if( route.length )
								{
									var r = route[ 0 ];
									var c = r.todo;
									document.title = r.title;
									
									$_get = new Object();
									if(vars) 
									{
										vars = vars.split( ';' );
										for( var i = 0; i < vars.length; i++ ) 
										{
											inp = (/([a-zA-Z0-9\_]+)=([a-zA-Z0-9\_]+)/g).exec( vars[ i ].trim() );
											$_get[ inp[ 1 ] ] = inp[ 2 ];
										}
									}
									c.apply( ( a.__vmodel ) ? a : window, [ $_get ] );
									delete window[ '$_get' ];
								}
							};
							
							window.onpopstate = f;

							if( d ) 
							{
								d.apply( window, [routes] );
							}
							
							return f;
						});
					})(),
					
					Computed: ( function() 
					{
						return (function( f ) 
						{
							return { 'computed':false, 'callback': f };
						});
					})(),
					
					Binding: ( function() 
					{
						return ( function( viewmodel, context ) 
						{
							var root = ( viewmodel instanceof Function ) ? new viewmodel() : viewmodel;
							var doc = ( !!context && context !== undefined && typeof context === 'string' ) ? document.getElementById( context ) : document;
							
							var events = [ 'click', 'mouseup', 'mousedown', 'mouseleave', 'mouseover', 'mouseout', 'change', 'keydown', 'keyup', 'blur', 'focus' ];
							var lotas = [ 'text', 'html', 'value', 'src', 'href' ];
							var loops = [ 'each', 'list' ];
							var funcs = [ 'method', 'function', 'visible', 'disable', 'select' ];
							
							function eventIs( t ) 
							{
								var r = events.filter( function( c ) 
								{
									return c === t;
								});
								return ( r.length ) ? true : false;
							}
							
							function lotaIs( t ) 
							{
								var r = lotas.filter( function( c ) 
								{
									return c === t;
								});
								return ( r.length ) ? true : false;
							}
							
							function loopIs( t ) 
							{
								var r = loops.filter( function( c ) 
								{
									return c === t;
								});
								return ( r.length ) ? true : false;
							}
							
							function funcIs( t ) 
							{
								var r = funcs.filter( function( c ) 
								{
									return c === t;
								});
								return ( r.length ) ? true : false;
							}
							
							function toqs( t, p ) 
							{
								return '[data-' + t + '=' + p + ']';
							}
							
							function toels( q, ctx ) 
							{
								var result = [];
								
								if( ctx.length ) 
								{
									for( var i = 0; i < ctx.length; i++ ) 
									{
										if( ctx[ i ].tagName.toLowerCase() == 'option' ) 
										{
											var item = ctx[ i ];
											q = q.substr(1);
											q = q.substr(0,q.lastIndexOf(']')).trim();
											q = q.split( '=' );
											for( var k = 0; k < item.attributes.length; k++ ) 
											{
												var attr = item.attributes[ k ];
												if( attr.name == q[ 0 ] && attr.value == q[ 1 ] ) 
												{
													result = result.concat( item );
													break;
												}
											}
										}
										else 
										{
											var narr = toels( q, ctx[ i ] );
											result = result.concat( narr );
										}
									}
								}
								else 
								{
									result = Array.from( ctx.querySelectorAll( q ) );
								}
								return result;
							}
							
							function applyEvent( obj, p, et, el, id ) 
							{
								if( !el.binding ) 
								{
									el.binding = { update: id };
								}
								else 
								{
									el.binding.update = id;
								}
								
								var callback = obj[ p ];
								function eh( e ) 
								{
									e.preventDefault();
									callback.call( obj, e );
								}
								el.addEventListener( et, eh );
							}
							
							function addEvent( obj, p, et, ct, id ) 
							{
								var els = toels( toqs( et, p ), ct );
								
								els.forEach( function( el ) 
								{
									if( el.eventRooted ) 
									{
										return;
									}
									
									applyEvent( obj, p, et, el, id );
								});
							}
							
							function trace( p, ctx, id ) 
							{
								console.log( '[', 'property: ' + '"' + p + '"', 'context:', ctx, 'id: ' + id, ']' );
							}
							
							function collecting( o, p, ctx, id ) 
							{
								var lim = lotas.length;
								var collect = [];
								for( var i = 0; i < lim; i++ ) 
								{
									var ta = lotas[ i ];
									var els = toels( toqs( ta, p ), ctx );
									if( els.length ) 
									{
										collect = collect.concat( els );
									}
								}
								
								return collect;
							}
							
							function bindValue() 
							{
								
							}
							
							function binding( o, p, ctx, id ) 
							{
trace( p, ctx, id );/////////////////////////////////////////////////
								var ct = ctx || doc;
								var v = o[ p ];
								var pt = v.constructor;
								
								switch( pt ) 
								{
									case Object:
										if( !v.computed && v.callback ) 
										{
											var c = v.callback;
											v.computed = true;
											o.computed.push( { p:p, c:c } );
											o[ p ] = v.callback.apply( o );
										}
									case String:
									case Number:
										v = ( pt != String ) ? v.toString() : v;
										o.context = ct;
										observeAuto( o, p, function( pn, oVal, nVal )
										{
											var cb = collecting( o, p, o.context, id );
											cb.forEach( function( el ) 
											{
												var attrs = Array.from( el.attributes );
												for( var i = 0; i < attrs.length; i++ ) 
												{
													var attr = attrs[ i ];
													if( attr.name.indexOf( 'data-' ) < 0 || p != attr.value ) 
													{
														continue;
													}
													
													var extp = attr.name.replace( 'data-', '' ).trim();
													
													if( extp == 'text' ) 
													{
														el.textContent = nVal;
													}
													else if( extp == 'html' ) 
													{
														el.innerHTML = nVal;
													}
													else
													{
														el.setAttribute( extp, nVal );
														if( el.nodeName.toLowerCase().trim() == 'input' && el.type == undefined || el.type == 'text' ) 
														{
															el.addEventListener( 'change', function( e ) 
															{
																o[ p ] = e.target.value;
															});
														}
													}
												}
											}); 
										}, ct);
										break;
									case Array:
										observeAuto( o, p, function( pn, oVal, nVal ) 
										{
											var els = [];
											var a = nVal;
											
											for( var i = 0; i < loops.length; i++ ) 
											{
												els = els.concat( toels( toqs( loops[ i ], p ), ct ) );
											}
											
											if( a.length )
											{
												for( var i = 0; i < a.length; i++ ) 
												{
													var templates = new Array();
													els.forEach( function( el )
													{
														var template = el.firstElementChild;
														
														if( i > 0 ) 
														{
															template = template.cloneNode( true );
															el.appendChild( template );
														}
														else 
														{
															if( template == null ) 
															{
																template = el.template;
																el.innerHTML = template;
															}
															else 
															{
																el.innerHTML = template.outerHTML;
															}
													
															template = el.firstElementChild;
														}
														
														if( !template.binding ) 
														{
															template.binding = { update: i };
														}
														else 
														{
															template.binding.update = i;
														}
														for( var j = 0; j < events.length; j++ ) 
														{
															var et = events[ j ];
															for( var k = 0; k < root.funcRoot.length; k++ ) 
															{
																var els = toels( toqs( et, root.funcRoot[ k ] ), template );
																
																els.forEach( function( el ) 
																{
																	if( !el.eventRooted ) 
																	{
																		el.eventRooted = root.funcRoot[ k ];
																		applyEvent( root, el.eventRooted, et, el, i );
																	}
																});
															}
														}
														
														templates.push( template );
													});
													initProperty( a[ i ], templates, i );
												}
											} 
											else 
											{
												els.forEach( function( el ) 
												{
													var template = el.firstElementChild;
													if( template != null ) 
													{
														el.template = el.firstElementChild.outerHTML;
													}
													el.innerHTML = '';
												});
											}
										}, ct);
										break;
									case Function: 
									default:
										for( var i = 0; i < events.length; i++ ) 
										{
											var et = events[ i ];
											addEvent( o, p, et, ct, id );
										}
										break;
								}
							}
							
							function observeAuto( o, p, c ) 
							{
								if( !o.observed.filter(function(c){return c==p}).length ) 
								{
									o.observed.push( p );
									
									if( o[p] instanceof Array ) 
									{
										var bkv = o[ p ];
										o[ p ] = '';
										solution5.Watch( o, p, function( pn, ov, nv ) 
										{
											c.apply( o, [ pn, ov, nv ] );
											computeAuto( o );
										});
										o[p] = bkv;
										return;
									}
									else 
									{
										solution5.Watch( o, p, function( pn, ov, nv ) 
										{
											c.apply( o, [ pn, ov, nv ] ); 
											if( !o.computed.filter( function( c ) { return p == c.p; } ).length ) 
											{
												computeAuto( o );
											}
										});
									}
								} 
								c.apply( o, [ p, '', o[p]] );
							}
							
							function computeAuto( o ) 
							{
								var lim = o.computed.length;
								for( var i = 0; i < lim; i++ ) 
								{
									var p = o.computed[ i ].p;
									var c = o.computed[ i ].c;
									o[ p ] = c.apply( o );
								}
							}
							
							function initProperty( o, ctx, id ) 
							{
								var ct = ctx || doc;
								
								if( o.propList == undefined ) 
								{
									o.propList = new Array();
									for( var p in o ) 
									{
										if( p === 'funcRoot' || 
											p === 'dataList' || 
											p === 'propList' || 
											p === 'computed' || 
											p === 'observed' || 
											( p === 'remove' && id == undefined ) ) 
										{
											continue;
										}
										o.propList.push( p );
									}
								}
								
								if( o.funcRoot == undefined && id == undefined ) 
								{
									o.funcRoot = new Array();
									for( var p in o ) 
									{
										if( o[ p ] instanceof Function ) 
										{
											o.funcRoot.push( p );
										}
									}
								}
								
								if( o.dataList == undefined && id == undefined )
								{
									o.dataList = new Array();
									for( var p in o ) 
									{
										if( o[ p ] instanceof Array ) 
										{
											if( p === 'funcRoot' || 
												p === 'dataList' || 
												p === 'propList' || 
												p === 'computed' || 
												p === 'observed' || 
												( p === 'remove' && id == undefined ) ) 
											{
												continue;
											}
											o.dataList.push( p );
										}
									}
								}
								
								if( o.computed == undefined ) 
								{
									o.computed = [];
								}
								
								if( o.observed == undefined ) 
								{
									o.observed = [];
								}
								
								var propList = o.propList;
								
								for( var i = 0; i < propList.length; i++ ) 
								{
									var p = propList[ i ];
									binding( o, p, ct, id );
								} 
							}
							
							initProperty( root, doc );
							
							root.remove = function( a, id ) 
							{
								return a.splice( id, 1 );
							};
							
							root.__vmodel = 1;
							return root;
						});
					})(),
					
					ObserveArray: function( arr, d ) 
					{
						var obj = new Object();
						obj.observe = 'observe';
						solution5.Watch( obj, obj.observe, function( propName, oldVal, newVal ) { d() });
						obj.observe = arr;
						return arr;
					},
					
					// TODO:
					RequestWorker: function ( scriptPath, onMessage ) 
					{
						try 
						{
							if( typeof Worker !== 'undefined' ) 
							{
								throw 'Your browser have not support the Worker.';
							}
							
							var worker = new Worker( scriptPath ); 
							worker.onmessage = onMessage;
							return worker;
						} 
						catch( err ) 
						{
							if( console.warn ) 
							{
								console.warn( err ); 
							} 
							else if( console.error )
							{
								console.error( err );
							} 
							else 
							{
								console.log( err );
							}
						}
					}, 
					
					OutThread: function( scriptPath, onWait ) 
					{
						return this.RequestWorker( scriptPath, onWait );
					}, 
					
					ServerSentEvent: function( serverScriptPath, onMessage ) 
					{
						try 
						{
							if( typeof EventSource == 'undefined' ) 
							{
								throw 'Your browser have not support the EventSource.';
							}
							
							var source = new EventSource( serverScriptPath );
							source.onmessage = onMessage;
							return source;
						} 
						catch( err ) 
						{
							if( console.warn ) 
							{
								console.warn( err ); 
							} 
							else if( console.error )
							{
								console.error( err );
							} 
							else 
							{
								console.log( err );
							}
						}
					}, 

					ServerMessage: function( scriptPath, onMessage ) 
					{
						return this.ServerSentEvent( scriptPath, onMessage );
					}, 

					Debug: function( mode ) 
					{
						if( mode === 'ON' ) 
						{
							/** This is show the size window. */
							window.addEventListener( 'resize', function( e ) 
							{
								if( window.timeOutClientSizeCounter ) 
								{
									clearTimeout( window.timeOutClientSizeCounter );
								}
								else 
								{
									clientsizetextshow = element5( '#el5-csl-client-size' ); 
									clientsizetextshow.css({ 
										position: 'fixed', 
										right: '10px', 
										top: '50px', 
										padding: '3px 5px', 
										background: ' black', 
										color: 'white' 
									}); 
								}
								
								clientsizetextshow.innerHTML = window.innerWidth + ' x ' + window.innerHeight + ' (px)'; 
								document.body.Equip( clientsizetextshow );
								
								window.timeOutClientSizeCounter = setTimeout( function() 
								{
									clearTimeout( window.timeOutClientSizeCounter );
									clientsizetextshow.Remove(); 
								}, 2000 );
							}, false ); 
							
							element5.WriteError = function( string ) 
							{
								if( window.timeOutErrorMessageCounter ) 
								{
									clearTimeout( window.timeOutErrorMessageCounter );
								}
								else 
								{
									errormessagetextshow = element5( '#error-message' ).css( { position: 'fixed', bottom: '0px', left: '0px', width: '100%', height: '20%', opacity: '0.8', padding: '10px', color: 'red', borderTop: '1px solid #999', overflow: 'scroll' } );
									var textErr = element5( '#error-txt' );
									if( textErr.createdBy ) 
									{
										errormessagetextshow.Equip( textErr );
									};
								}
								
								document.body.Equip( errormessagetextshow ); 
								
								var errStr = document.createTextNode( 'ERROR: ' + string );
								var p = element5.Create( 'p.error-text' ).css( { margin: '2px 0' } );
								p.Equip( errStr );
								
								errormessagetextshow.Equip( p ); 
								
								window.timeOutErrorMessageCounter = setTimeout( function() 
								{
									clearTimeout( window.timeOutErrorMessageCounter );
									window.timeOutErrorMessageCounter = 0;
									errormessagetextshow.Remove();
								}, 2000 );
							}; 
							
							element5.WriteAlert = function( string ) 
							{
								if( window.timeOutAlertMessageCounter ) 
								{
									clearTimeout( window.timeOutAlertMessageCounter );
								}
								else 
								{
									alertmessagetextshow = element5( '#alert-message' ).css( { position: 'fixed', bottom: '0px', left: '0px', width: '100%', height: '20%', opacity: '0.8', padding: '10px', color: 'white', borderTop: '1px solid #999', overflow: 'scroll' } );
									var textErr = element5( '#alert-txt' );
									if( textErr.createdBy ) 
									{
										alertmessagetextshow.Equip( textErr );
									};
								}
								
								document.body.Equip( alertmessagetextshow ); 
								
								var errStr = document.createTextNode( 'ALERT: ' + string );
								var p = element5.Create( 'p.alert-text' ).css( { margin: '2px 0' } );
								p.Equip( errStr );
								
								alertmessagetextshow.Equip( p ); 
								
								window.timeOutAlertMessageCounter = setTimeout( function() 
								{
									clearTimeout( window.timeOutAlertMessageCounter );
									window.timeOutAlertMessageCounter = 0;
									alertmessagetextshow.Remove();
								}, 5000 );
							}; 
						}
						return this;
					}, 
					
					EnterFullscreen: function() 
					{
						element5.GetBody().EnterFullscreen(); 
						return this;
					},
					
					EscapeFullscreen: function() 
					{
						element5.GetBody().EscapeFullscreen(); 
						return this;
					}, 
					
					ToggleFullscreen: function() 
					{
						element5.GetBody().ToggleFullscreen(); 
						return this;
					}, 
				}; 
				
				module.exports = Solution; 
			}
		]
	);
} 

// Export Element 5
Element5UniversalExport( this, Factory ); 
	