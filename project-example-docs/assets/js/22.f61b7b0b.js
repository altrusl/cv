(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{221:function(e,t,a){"use strict";a.r(t);var c=a(28),n=Object(c.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"enabling-https"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enabling-https"}},[e._v("#")]),e._v(" Enabling HTTPS")]),e._v(" "),a("h2",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),a("p",[e._v("The website should work over HTTPS")]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"apache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apache"}},[e._v("#")]),e._v(" Apache")]),e._v(" "),a("p",[e._v("Enable SSL on the webserver according to its documentation")]),e._v(" "),a("h3",{attrs:{id:"enabling-ssl-in-couchdb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enabling-ssl-in-couchdb"}},[e._v("#")]),e._v(" Enabling SSL in CouchDB")]),e._v(" "),a("p",[e._v("PouchDB does not work with self-signed certificates so the best way is\nto use SSL certificate from the main domain. Its data can be taken from Plesk admin panel")]),e._v(" "),a("p",[e._v("Edit CouchDB "),a("code",[e._v("local.ini")]),e._v(" file ("),a("code",[e._v("/opt/couchdb/etc/local.ini")]),e._v("):")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("[ssl]\nenable = true\n;cert_file = /etc/couchdb/cert/couchdb.pem\n;key_file = /etc/couchdb/cert/privkey.pem\n\ncert_file = /opt/couchdb/cert/server.crt\nkey_file = /opt/couchdb/cert/private.key\ncacert_file = /opt/couchdb/cert/cert-ca.crt\n")])])]),a("p",[e._v("Open 6984 on the server firewall for incoming connections in the Admin panel")])])}),[],!1,null,null,null);t.default=n.exports}}]);