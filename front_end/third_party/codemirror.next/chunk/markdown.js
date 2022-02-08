import{b as l,e as u,g as e,h as r,i as h,j as d,k as c,l as f,m as p,N as t,n as m,o as g,P as n,p as i,q as k,r as x,s as o,T as s,t as a,u as b,v as L}from"./codemirror.js";
class S{constructor(e,r,n,s,i,o,a){this.type=e,this.value=r,this.from=n,this.hash=s,this.end=i,this.children=o,this.positions=a,this.hashProp=[[t.contextHash,s]]}static create(e,t,r,n,s){return new S(e,t,r,n+(n<<8)+e+(t<<4)|0,s,[],[])}addChild(e,r){e.prop(t.contextHash)!=this.hash&&(e=new s(e.type,e.children,e.positions,e.length,this.hashProp)),this.children.push(e),this.positions.push(r)}toTree(t,r=this.end){let n=this.children.length-1;return n>=0&&(r=Math.max(r,this.positions[n]+this.children[n].length+this.from)),new s(t.types[this.type],this.children,this.positions,r-this.from).balance({makeTree:(t,r,n)=>new s(e.none,t,r,n,this.hashProp)})}}var C;!function(e){e[e.Document=1]="Document",e[e.CodeBlock=2]="CodeBlock",e[e.FencedCode=3]="FencedCode",e[e.Blockquote=4]="Blockquote",e[e.HorizontalRule=5]="HorizontalRule",e[e.BulletList=6]="BulletList",e[e.OrderedList=7]="OrderedList",e[e.ListItem=8]="ListItem",e[e.ATXHeading1=9]="ATXHeading1",e[e.ATXHeading2=10]="ATXHeading2",e[e.ATXHeading3=11]="ATXHeading3",e[e.ATXHeading4=12]="ATXHeading4",e[e.ATXHeading5=13]="ATXHeading5",e[e.ATXHeading6=14]="ATXHeading6",e[e.SetextHeading1=15]="SetextHeading1",e[e.SetextHeading2=16]="SetextHeading2",e[e.HTMLBlock=17]="HTMLBlock",e[e.LinkReference=18]="LinkReference",e[e.Paragraph=19]="Paragraph",e[e.CommentBlock=20]="CommentBlock",e[e.ProcessingInstructionBlock=21]="ProcessingInstructionBlock",e[e.Escape=22]="Escape",e[e.Entity=23]="Entity",e[e.HardBreak=24]="HardBreak",e[e.Emphasis=25]="Emphasis",e[e.StrongEmphasis=26]="StrongEmphasis",e[e.Link=27]="Link",e[e.Image=28]="Image",e[e.InlineCode=29]="InlineCode",e[e.HTMLTag=30]="HTMLTag",e[e.Comment=31]="Comment",e[e.ProcessingInstruction=32]="ProcessingInstruction",e[e.URL=33]="URL",e[e.HeaderMark=34]="HeaderMark",e[e.QuoteMark=35]="QuoteMark",e[e.ListMark=36]="ListMark",e[e.LinkMark=37]="LinkMark",e[e.EmphasisMark=38]="EmphasisMark",e[e.CodeMark=39]="CodeMark",e[e.CodeText=40]="CodeText",e[e.CodeInfo=41]="CodeInfo",e[e.LinkTitle=42]="LinkTitle",e[e.LinkLabel=43]="LinkLabel"}(C||(C={}));class w{constructor(e,t){this.start=e,this.content=t,this.marks=[],this.parsers=[]}}class A{constructor(){this.text="",this.baseIndent=0,this.basePos=0,this.depth=0,this.markers=[],this.pos=0,this.indent=0,this.next=-1}forward(){this.basePos>this.pos&&this.forwardInner()}forwardInner(){let e=this.skipSpace(this.basePos);this.indent=this.countIndent(e,this.pos,this.indent),this.pos=e,this.next=e==this.text.length?-1:this.text.charCodeAt(e)}skipSpace(e){return B(this.text,e)}reset(e){for(this.text=e,this.baseIndent=this.basePos=this.pos=this.indent=0,this.forwardInner(),this.depth=1;this.markers.length;)this.markers.pop()}moveBase(e){this.basePos=e,this.baseIndent=this.countIndent(e,this.pos,this.indent)}moveBaseColumn(e){this.baseIndent=e,this.basePos=this.findColumn(e)}addMarker(e){this.markers.push(e)}countIndent(e,t=0,r=0){for(let n=t;n<e;n++)r+=9==this.text.charCodeAt(n)?4-r%4:1;return r}findColumn(e){let t=0;for(let r=0;t<this.text.length&&r<e;t++)r+=9==this.text.charCodeAt(t)?4-r%4:1;return t}scrub(){if(!this.baseIndent)return this.text;let e="";for(let t=0;t<this.basePos;t++)e+=" ";return e+this.text.slice(this.basePos)}}function y(e,t,r){if(r.pos==r.text.length||e!=t.block&&r.indent>=t.stack[r.depth+1].value+r.baseIndent)return!0;if(r.indent>=r.baseIndent+4)return!1;let n=(e.type==C.OrderedList?O:N)(r,t,!1);return n>0&&(e.type!=C.BulletList||v(r,t,!1)<0)&&r.text.charCodeAt(r.pos+n-1)==e.value}const T={[C.Blockquote]:(e,t,r)=>62==r.next&&(r.markers.push(le(C.QuoteMark,t.lineStart+r.pos,t.lineStart+r.pos+1)),r.moveBase(r.pos+(I(r.text.charCodeAt(r.pos+1))?2:1)),e.end=t.lineStart+r.text.length,!0),[C.ListItem]:(e,t,r)=>!(r.indent<r.baseIndent+e.value&&r.next>-1)&&(r.moveBaseColumn(r.baseIndent+e.value),!0),[C.OrderedList]:y,[C.BulletList]:y,[C.Document]:()=>!0};function I(e){return 32==e||9==e||10==e||13==e}function B(e,t=0){for(;t<e.length&&I(e.charCodeAt(t));)t++;return t}function E(e,t,r){for(;t>r&&I(e.charCodeAt(t-1));)t--;return t}function M(e){if(96!=e.next&&126!=e.next)return-1;let t=e.pos+1;for(;t<e.text.length&&e.text.charCodeAt(t)==e.next;)t++;if(t<e.pos+3)return-1;if(96==e.next)for(let r=t;r<e.text.length;r++)if(96==e.text.charCodeAt(r))return-1;return t}function H(e){return 62!=e.next?-1:32==e.text.charCodeAt(e.pos+1)?2:1}function v(e,t,r){if(42!=e.next&&45!=e.next&&95!=e.next)return-1;let n=1;for(let t=e.pos+1;t<e.text.length;t++){let r=e.text.charCodeAt(t);if(r==e.next)n++;else if(!I(r))return-1}return r&&45==e.next&&X(e)>-1&&e.depth==t.stack.length||n<3?-1:1}function P(e,t){for(let r=e.stack.length-1;r>=0;r--)if(e.stack[r].type==t)return!0;return!1}function N(e,t,r){return 45!=e.next&&43!=e.next&&42!=e.next||e.pos!=e.text.length-1&&!I(e.text.charCodeAt(e.pos+1))||!(!r||P(t,C.BulletList)||e.skipSpace(e.pos+2)<e.text.length)?-1:1}function O(e,t,r){let n=e.pos,s=e.next;for(;s>=48&&s<=57;){if(n++,n==e.text.length)return-1;s=e.text.charCodeAt(n)}return n==e.pos||n>e.pos+9||46!=s&&41!=s||n<e.text.length-1&&!I(e.text.charCodeAt(n+1))||r&&!P(t,C.OrderedList)&&(e.skipSpace(n+1)==e.text.length||n>e.pos+1||49!=e.next)?-1:n+1-e.pos}function R(e){if(35!=e.next)return-1;let t=e.pos+1;for(;t<e.text.length&&35==e.text.charCodeAt(t);)t++;if(t<e.text.length&&32!=e.text.charCodeAt(t))return-1;let r=t-e.pos;return r>6?-1:r}function X(e){if(45!=e.next&&61!=e.next||e.indent>=e.baseIndent+4)return-1;let t=e.pos+1;for(;t<e.text.length&&e.text.charCodeAt(t)==e.next;)t++;let r=t;for(;t<e.text.length&&I(e.text.charCodeAt(t));)t++;return t==e.text.length?r:-1}const z=/^[ \t]*$/,D=/-->/,j=/\?>/,q=[[/^<(?:script|pre|style)(?:\s|>|$)/i,/<\/(?:script|pre|style)>/i],[/^\s*<!--/,D],[/^\s*<\?/,j],[/^\s*<![A-Z]/,/>/],[/^\s*<!\[CDATA\[/,/\]\]>/],[/^\s*<\/?(?:address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h1|h2|h3|h4|h5|h6|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul)(?:\s|\/?>|$)/i,z],[/^\s*(?:<\/[a-z][\w-]*\s*>|<[a-z][\w-]*(\s+[a-z:_][\w-.]*(?:\s*=\s*(?:[^\s"'=<>`]+|'[^']*'|"[^"]*"))?)*\s*>)\s*$/i,z]];function $(e,t,r){if(60!=e.next)return-1;let n=e.text.slice(e.pos);for(let e=0,t=q.length-(r?1:0);e<t;e++)if(q[e][0].test(n))return e;return-1}function F(e,t){let r=e.countIndent(t,e.pos,e.indent),n=e.countIndent(e.skipSpace(t),t,r);return n>=r+5?r+1:n}function U(e,t,r){let n=e.length-1;n>=0&&e[n].to==t&&e[n].type==C.CodeText?e[n].to=r:e.push(le(C.CodeText,t,r))}const Q={LinkReference:void 0,IndentedCode(e,t){let r=t.baseIndent+4;if(t.indent<r)return!1;let n=t.findColumn(r),s=e.lineStart+n,i=e.lineStart+t.text.length,o=[],a=[];for(U(o,s,i);e.nextLine()&&t.depth>=e.stack.length;)if(t.pos==t.text.length){U(a,e.lineStart-1,e.lineStart);for(let e of t.markers)a.push(e)}else{if(t.indent<r)break;{if(a.length){for(let e of a)e.type==C.CodeText?U(o,e.from,e.to):o.push(e);a=[]}U(o,e.lineStart-1,e.lineStart);for(let e of t.markers)o.push(e);i=e.lineStart+t.text.length;let r=e.lineStart+t.findColumn(t.baseIndent+4);r<i&&U(o,r,i)}}return a.length&&(a=a.filter((e=>e.type!=C.CodeText)),a.length&&(t.markers=a.concat(t.markers))),e.addNode(e.buffer.writeElements(o,-s).finish(C.CodeBlock,i-s),s),!0},FencedCode(e,t){let r=M(t);if(r<0)return!1;let n=e.lineStart+t.pos,s=t.next,i=r-t.pos,o=t.skipSpace(r),a=E(t.text,t.text.length,o),l=[le(C.CodeMark,n,n+i)];o<a&&l.push(le(C.CodeInfo,e.lineStart+o,e.lineStart+a));for(let r=!0;e.nextLine()&&t.depth>=e.stack.length;r=!1){let n=t.pos;if(t.indent-t.baseIndent<4)for(;n<t.text.length&&t.text.charCodeAt(n)==s;)n++;if(n-t.pos>=i&&t.skipSpace(n)==t.text.length){for(let e of t.markers)l.push(e);l.push(le(C.CodeMark,e.lineStart+t.pos,e.lineStart+n)),e.nextLine();break}{r||U(l,e.lineStart-1,e.lineStart);for(let e of t.markers)l.push(e);let n=e.lineStart+t.basePos,s=e.lineStart+t.text.length;n<s&&U(l,n,s)}}return e.addNode(e.buffer.writeElements(l,-n).finish(C.FencedCode,e.prevLineEnd()-n),n),!0},Blockquote(e,t){let r=H(t);return!(r<0)&&(e.startContext(C.Blockquote,t.pos),e.addNode(C.QuoteMark,e.lineStart+t.pos,e.lineStart+t.pos+1),t.moveBase(t.pos+r),null)},HorizontalRule(e,t){if(v(t,e,!1)<0)return!1;let r=e.lineStart+t.pos;return e.nextLine(),e.addNode(C.HorizontalRule,r),!0},BulletList(e,t){let r=N(t,e,!1);if(r<0)return!1;e.block.type!=C.BulletList&&e.startContext(C.BulletList,t.basePos,t.next);let n=F(t,t.pos+1);return e.startContext(C.ListItem,t.basePos,n-t.baseIndent),e.addNode(C.ListMark,e.lineStart+t.pos,e.lineStart+t.pos+r),t.moveBaseColumn(n),null},OrderedList(e,t){let r=O(t,e,!1);if(r<0)return!1;e.block.type!=C.OrderedList&&e.startContext(C.OrderedList,t.basePos,t.text.charCodeAt(t.pos+r-1));let n=F(t,t.pos+r);return e.startContext(C.ListItem,t.basePos,n-t.baseIndent),e.addNode(C.ListMark,e.lineStart+t.pos,e.lineStart+t.pos+r),t.moveBaseColumn(n),null},ATXHeading(e,t){let r=R(t);if(r<0)return!1;let n=t.pos,s=e.lineStart+n,i=E(t.text,t.text.length,n),o=i;for(;o>n&&t.text.charCodeAt(o-1)==t.next;)o--;o!=i&&o!=n&&I(t.text.charCodeAt(o-1))||(o=t.text.length);let a=e.buffer.write(C.HeaderMark,0,r).writeElements(e.parser.parseInline(t.text.slice(n+r+1,o),s+r+1),-s);o<t.text.length&&a.write(C.HeaderMark,o-n,i-n);let l=a.finish(C.ATXHeading1-1+r,t.text.length-n);return e.nextLine(),e.addNode(l,s),!0},HTMLBlock(e,t){let r=$(t,0,!1);if(r<0)return!1;let n=e.lineStart+t.pos,s=q[r][1],i=[],o=s!=z;for(;!s.test(t.text)&&e.nextLine();){if(t.depth<e.stack.length){o=!1;break}for(let e of t.markers)i.push(e)}o&&e.nextLine();let a=s==D?C.CommentBlock:s==j?C.ProcessingInstructionBlock:C.HTMLBlock,l=e.prevLineEnd();return e.addNode(e.buffer.writeElements(i,-n).finish(a,l-n),n),!0},SetextHeading:void 0};class Z{constructor(e){this.stage=0,this.elts=[],this.pos=0,this.start=e.start,this.advance(e.content)}nextLine(e,t,r){if(-1==this.stage)return!1;let n=r.content+"\n"+t.scrub(),s=this.advance(n);return s>-1&&s<n.length&&this.complete(e,r,s)}finish(e,t){return(2==this.stage||3==this.stage)&&B(t.content,this.pos)==t.content.length&&this.complete(e,t,t.content.length)}complete(e,t,r){return e.addLeafElement(t,le(C.LinkReference,this.start,this.start+r,this.elts)),!0}nextStage(e){return e?(this.pos=e.to-this.start,this.elts.push(e),this.stage++,!0):(!1===e&&(this.stage=-1),!1)}advance(e){for(;;){if(-1==this.stage)return-1;if(0==this.stage){if(!this.nextStage(Le(e,this.pos,this.start,!0)))return-1;if(58!=e.charCodeAt(this.pos))return this.stage=-1;this.elts.push(le(C.LinkMark,this.pos+this.start,this.pos+this.start+1)),this.pos++}else{if(1!=this.stage){if(2==this.stage){let t=B(e,this.pos),r=0;if(t>this.pos){let n=be(e,t,this.start);if(n){let t=_(e,n.to-this.start);t>0&&(this.nextStage(n),r=t)}}return r||(r=_(e,this.pos)),r>0&&r<e.length?r:-1}return _(e,this.pos)}if(!this.nextStage(xe(e,B(e,this.pos),this.start)))return-1}}}}function _(e,t){for(;t<e.length;t++){let r=e.charCodeAt(t);if(10==r)break;if(!I(r))return-1}return t}class V{nextLine(e,t,r){let n=t.depth<e.stack.length?-1:X(t),s=t.next;if(n<0)return!1;let i=le(C.HeaderMark,e.lineStart+t.pos,e.lineStart+n);return e.nextLine(),e.addLeafElement(r,le(61==s?C.SetextHeading1:C.SetextHeading2,r.start,e.prevLineEnd(),[...e.parser.parseInline(r.content,r.start),i])),!0}finish(){return!1}}const G={LinkReference:(e,t)=>91==t.content.charCodeAt(0)?new Z(t):null,SetextHeading:()=>new V},K=[(e,t)=>R(t)>=0,(e,t)=>M(t)>=0,(e,t)=>H(t)>=0,(e,t)=>N(t,e,!0)>=0,(e,t)=>O(t,e,!0)>=0,(e,t)=>v(t,e,!0)>=0,(e,t)=>$(t,0,!0)>=0];class J{constructor(e,t,r,n){this.parser=e,this.input=t,this.ranges=n,this.line=new A,this.atEnd=!1,this.dontInject=new Set,this.stoppedAt=null,this.rangeI=0,this.to=n[n.length-1].to,this.lineStart=this.absoluteLineStart=this.absoluteLineEnd=n[0].from,this.block=S.create(C.Document,0,this.lineStart,0,0),this.stack=[this.block],this.fragments=r.length?new Ae(r,t):null,this.readLine()}get parsedPos(){return this.absoluteLineStart}advance(){if(null!=this.stoppedAt&&this.absoluteLineStart>this.stoppedAt)return this.finish();let{line:e}=this;for(;;){for(;e.depth<this.stack.length;)this.finishContext();for(let t of e.markers)this.addNode(t.type,t.from,t.to);if(e.pos<e.text.length)break;if(!this.nextLine())return this.finish()}if(this.fragments&&this.reuseFragment(e.basePos))return null;e:for(;;){for(let t of this.parser.blockParsers)if(t){let r=t(this,e);if(0!=r){if(1==r)return null;e.forward();continue e}}break}let t=new w(this.lineStart+e.pos,e.text.slice(e.pos));for(let e of this.parser.leafBlockParsers)if(e){let r=e(this,t);r&&t.parsers.push(r)}e:for(;this.nextLine()&&e.pos!=e.text.length;){if(e.indent<e.baseIndent+4)for(let t of this.parser.endLeafBlock)if(t(this,e))break e;for(let r of t.parsers)if(r.nextLine(this,e,t))return null;t.content+="\n"+e.scrub();for(let r of e.markers)t.marks.push(r)}return this.finishLeaf(t),null}stopAt(e){if(null!=this.stoppedAt&&this.stoppedAt<e)throw new RangeError("Can't move stoppedAt forward");this.stoppedAt=e}reuseFragment(e){if(!this.fragments.moveTo(this.absoluteLineStart+e,this.absoluteLineStart)||!this.fragments.matches(this.block.hash))return!1;let t=this.fragments.takeNodes(this);if(!t)return!1;let r=t,n=this.absoluteLineStart+t;for(let e=1;e<this.ranges.length;e++){let t=this.ranges[e-1].to,s=this.ranges[e].from;t>=this.lineStart&&s<n&&(r-=s-t)}return this.lineStart+=r,this.absoluteLineStart+=t,this.moveRangeI(),this.absoluteLineStart<this.to?(this.lineStart++,this.absoluteLineStart++,this.readLine()):(this.atEnd=!0,this.readLine()),!0}nextLine(){return this.lineStart+=this.line.text.length,this.absoluteLineEnd>=this.to?(this.absoluteLineStart=this.absoluteLineEnd,this.atEnd=!0,this.readLine(),!1):(this.lineStart++,this.absoluteLineStart=this.absoluteLineEnd+1,this.moveRangeI(),this.readLine(),!0)}moveRangeI(){for(;this.rangeI<this.ranges.length-1&&this.absoluteLineStart>=this.ranges[this.rangeI].to;)this.rangeI++}readLine(){let e,{line:t}=this,r=this.absoluteLineStart;if(this.atEnd)e="";else if(e=this.lineChunkAt(r),r+=e.length,this.ranges.length>1){let t=this.absoluteLineStart,n=this.rangeI;for(;this.ranges[n].to<r;){n++;let s=this.ranges[n].from,i=this.lineChunkAt(s);r=s+i.length,e=e.slice(0,this.ranges[n-1].to-t)+i,t=r-e.length}}for(this.absoluteLineEnd=r,t.reset(e);t.depth<this.stack.length;t.depth++){let e=this.stack[t.depth],r=this.parser.skipContextMarkup[e.type];if(!r)throw new Error("Unhandled block context "+C[e.type]);if(!r(e,this,t))break;t.forward()}}lineChunkAt(e){let t,r=this.input.chunk(e);if(this.input.lineChunks)t="\n"==r?"":r;else{let e=r.indexOf("\n");t=e<0?r:r.slice(0,e)}return e+t.length>this.to?t.slice(0,this.to-e):t}prevLineEnd(){return this.atEnd?this.lineStart:this.lineStart-1}startContext(e,t,r=0){this.block=S.create(e,r,this.lineStart+t,this.block.hash,this.lineStart+this.line.text.length),this.stack.push(this.block)}startComposite(e,t,r=0){this.startContext(this.parser.getNodeType(e),t,r)}addNode(e,t,r){"number"==typeof e&&(e=new s(this.parser.nodeSet.types[e],se,se,(null!=r?r:this.prevLineEnd())-t)),this.block.addChild(e,t-this.block.from)}addElement(e){this.block.addChild(e.toTree(this.parser.nodeSet),e.from-this.block.from)}addLeafElement(e,t){this.addNode(this.buffer.writeElements(Ce(t.children,e.marks),-t.from).finish(t.type,t.to-t.from),t.from)}finishContext(){let e=this.stack.pop(),t=this.stack[this.stack.length-1];t.addChild(e.toTree(this.parser.nodeSet),e.from-t.from),this.block=t}finish(){for(;this.stack.length>1;)this.finishContext();return this.addGaps(this.block.toTree(this.parser.nodeSet,this.lineStart))}addGaps(e){return this.ranges.length>1?W(this.ranges,0,e.topNode,this.ranges[0].from,this.dontInject):e}finishLeaf(e){for(let t of e.parsers)if(t.finish(this,e))return;let t=Ce(this.parser.parseInline(e.content,e.start),e.marks);this.addNode(this.buffer.writeElements(t,-e.start).finish(C.Paragraph,e.content.length),e.start)}elt(e,t,r,n){return"string"==typeof e?le(this.parser.getNodeType(e),t,r,n):new ae(e,t)}get buffer(){return new ie(this.parser.nodeSet)}}function W(e,t,r,n,i){if(i.has(r.tree))return r.tree;let o=e[t].to,a=[],l=[],h=r.from+n;function f(r,s){for(;s?r>=o:r>o;){let s=e[t+1].from-o;n+=s,r+=s,t++,o=e[t].to}}for(let s=r.firstChild;s;s=s.nextSibling){f(s.from+n,!0);let r,d=s.from+n;s.to+n>o?(r=W(e,t,s,n,i),f(s.to+n,!1)):r=s.toTree(),a.push(r),l.push(d-h)}return f(r.to+n,!1),new s(r.type,a,l,r.to+n-h,r.tree?r.tree.propValues:void 0)}class Y extends n{constructor(e,t,r,n,s,i,o,a,l){super(),this.nodeSet=e,this.blockParsers=t,this.leafBlockParsers=r,this.blockNames=n,this.endLeafBlock=s,this.skipContextMarkup=i,this.inlineParsers=o,this.inlineNames=a,this.wrappers=l,this.nodeTypes=Object.create(null);for(let t of e.types)this.nodeTypes[t.name]=t.id}createParse(e,t,r){let n=new J(this,e,t,r);for(let s of this.wrappers)n=s(n,e,t,r);return n}configure(n){let s=te(n);if(!s)return this;let{nodeSet:i,skipContextMarkup:o}=this,a=this.blockParsers.slice(),l=this.leafBlockParsers.slice(),h=this.blockNames.slice(),f=this.inlineParsers.slice(),d=this.inlineNames.slice(),c=this.endLeafBlock.slice(),p=this.wrappers;if(ee(s.defineNodes)){o=Object.assign({},o);let n=i.types.slice();for(let r of s.defineNodes){let{name:s,block:i,composite:a}="string"==typeof r?{name:r}:r;if(n.some((e=>e.name==s)))continue;a&&(o[n.length]=(e,t,r)=>a(t,r,e.value));let l=n.length,h=a?["Block","BlockContext"]:i?l>=C.ATXHeading1&&l<=C.SetextHeading2?["Block","LeafBlock","Heading"]:["Block","LeafBlock"]:void 0;n.push(e.define({id:l,name:s,props:h&&[[t.group,h]]}))}i=new r(n)}if(ee(s.props)&&(i=i.extend(...s.props)),ee(s.remove))for(let e of s.remove){let t=this.blockNames.indexOf(e),r=this.inlineNames.indexOf(e);t>-1&&(a[t]=l[t]=void 0),r>-1&&(f[r]=void 0)}if(ee(s.parseBlock))for(let e of s.parseBlock){let t=h.indexOf(e.name);if(t>-1)a[t]=e.parse,l[t]=e.leaf;else{let t=e.before?re(h,e.before):e.after?re(h,e.after)+1:h.length-1;a.splice(t,0,e.parse),l.splice(t,0,e.leaf),h.splice(t,0,e.name)}e.endLeaf&&c.push(e.endLeaf)}if(ee(s.parseInline))for(let e of s.parseInline){let t=d.indexOf(e.name);if(t>-1)f[t]=e.parse;else{let t=e.before?re(d,e.before):e.after?re(d,e.after)+1:d.length-1;f.splice(t,0,e.parse),d.splice(t,0,e.name)}}return s.wrap&&(p=p.concat(s.wrap)),new Y(i,a,l,h,c,o,f,d,p)}getNodeType(e){let t=this.nodeTypes[e];if(null==t)throw new RangeError(`Unknown node type '${e}'`);return t}parseInline(e,t){let r=new Se(this,e,t);e:for(let e=t;e<r.end;){let t=r.char(e);for(let n of this.inlineParsers)if(n){let s=n(r,t,e);if(s>=0){e=s;continue e}}e++}return r.resolveMarkers(0)}}function ee(e){return null!=e&&e.length>0}function te(e){if(!Array.isArray(e))return e;if(0==e.length)return null;let t=te(e[0]);if(1==e.length)return t;let r=te(e.slice(1));if(!r||!t)return t||r;let n=(e,t)=>(e||se).concat(t||se),s=t.wrap,i=r.wrap;return{props:n(t.props,r.props),defineNodes:n(t.defineNodes,r.defineNodes),parseBlock:n(t.parseBlock,r.parseBlock),parseInline:n(t.parseInline,r.parseInline),remove:n(t.remove,r.remove),wrap:s?i?(e,t,r,n)=>s(i(e,t,r,n),t,r,n):s:i}}function re(e,t){let r=e.indexOf(t);if(r<0)throw new RangeError(`Position specified relative to unknown parser ${t}`);return r}let ne=[e.none];for(let r,n=1;r=C[n];n++)ne[n]=e.define({id:n,name:r,props:n>=C.Escape?[]:[[t.group,n in T?["Block","BlockContext"]:["Block","LeafBlock"]]]});const se=[];class ie{constructor(e){this.nodeSet=e,this.content=[],this.nodes=[]}write(e,t,r,n=0){return this.content.push(e,t,r,4+4*n),this}writeElements(e,t=0){for(let r of e)r.writeTo(this,t);return this}finish(e,t){return s.build({buffer:this.content,nodeSet:this.nodeSet,reused:this.nodes,topID:e,length:t})}}class oe{constructor(e,t,r,n=se){this.type=e,this.from=t,this.to=r,this.children=n}writeTo(e,t){let r=e.content.length;e.writeElements(this.children,t),e.content.push(this.type,this.from+t,this.to+t,e.content.length+4-r)}toTree(e){return new ie(e).writeElements(this.children,-this.from).finish(this.type,this.to-this.from)}}class ae{constructor(e,t){this.tree=e,this.from=t}get to(){return this.from+this.tree.length}get type(){return this.tree.type.id}get children(){return se}writeTo(e,t){e.nodes.push(this.tree),e.content.push(e.nodes.length-1,this.from+t,this.to+t,-1)}toTree(){return this.tree}}function le(e,t,r,n){return new oe(e,t,r,n)}const he={resolve:"Emphasis",mark:"EmphasisMark"},fe={resolve:"Emphasis",mark:"EmphasisMark"},de={},ce={};class pe{constructor(e,t,r,n){this.type=e,this.from=t,this.to=r,this.side=n}}const ue="!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";let me=/[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~\xA1\u2010-\u2027]/;try{me=new RegExp("[\\p{Pc}|\\p{Pd}|\\p{Pe}|\\p{Pf}|\\p{Pi}|\\p{Po}|\\p{Ps}]","u")}catch(e){}const ge={Escape(e,t,r){if(92!=t||r==e.end-1)return-1;let n=e.char(r+1);for(let t=0;t<ue.length;t++)if(ue.charCodeAt(t)==n)return e.append(le(C.Escape,r,r+2));return-1},Entity(e,t,r){if(38!=t)return-1;let n=/^(?:#\d+|#x[a-f\d]+|\w+);/i.exec(e.slice(r+1,r+31));return n?e.append(le(C.Entity,r,r+1+n[0].length)):-1},InlineCode(e,t,r){if(96!=t||r&&96==e.char(r-1))return-1;let n=r+1;for(;n<e.end&&96==e.char(n);)n++;let s=n-r,i=0;for(;n<e.end;n++)if(96==e.char(n)){if(i++,i==s&&96!=e.char(n+1))return e.append(le(C.InlineCode,r,n+1,[le(C.CodeMark,r,r+s),le(C.CodeMark,n+1-s,n+1)]))}else i=0;return-1},HTMLTag(e,t,r){if(60!=t||r==e.end-1)return-1;let n=e.slice(r+1,e.end),s=/^(?:[a-z][-\w+.]+:[^\s>]+|[a-z\d.!#$%&'*+/=?^_`{|}~-]+@[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?(?:\.[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?)*)>/i.exec(n);if(s)return e.append(le(C.URL,r,r+1+s[0].length));let i=/^!--[^>](?:-[^-]|[^-])*?-->/i.exec(n);if(i)return e.append(le(C.Comment,r,r+1+i[0].length));let o=/^\?[^]*?\?>/.exec(n);if(o)return e.append(le(C.ProcessingInstruction,r,r+1+o[0].length));let a=/^(?:![A-Z][^]*?>|!\[CDATA\[[^]*?\]\]>|\/\s*[a-zA-Z][\w-]*\s*>|\s*[a-zA-Z][\w-]*(\s+[a-zA-Z:_][\w-.:]*(?:\s*=\s*(?:[^\s"'=<>`]+|'[^']*'|"[^"]*"))?)*\s*(\/\s*)?>)/.exec(n);return a?e.append(le(C.HTMLTag,r,r+1+a[0].length)):-1},Emphasis(e,t,r){if(95!=t&&42!=t)return-1;let n=r+1;for(;e.char(n)==t;)n++;let s=e.slice(r-1,r),i=e.slice(n,n+1),o=me.test(s),a=me.test(i),l=/\s|^$/.test(s),h=/\s|^$/.test(i),f=!h&&(!a||l||o),d=!l&&(!o||h||a),c=f&&(42==t||!d||o),p=d&&(42==t||!f||a);return e.append(new pe(95==t?he:fe,r,n,(c?1:0)|(p?2:0)))},HardBreak(e,t,r){if(92==t&&10==e.char(r+1))return e.append(le(C.HardBreak,r,r+2));if(32==t){let t=r+1;for(;32==e.char(t);)t++;if(10==e.char(t)&&t>=r+2)return e.append(le(C.HardBreak,r,t+1))}return-1},Link:(e,t,r)=>91==t?e.append(new pe(de,r,r+1,1)):-1,Image:(e,t,r)=>33==t&&91==e.char(r+1)?e.append(new pe(ce,r,r+2,1)):-1,LinkEnd(e,t,r){if(93!=t)return-1;for(let t=e.parts.length-1;t>=0;t--){let n=e.parts[t];if(n instanceof pe&&(n.type==de||n.type==ce)){if(!n.side||e.skipSpace(n.to)==r&&!/[(\[]/.test(e.slice(r+1,r+2)))return e.parts[t]=null,-1;let s=e.takeContent(t),i=e.parts[t]=ke(e,s,n.type==de?C.Link:C.Image,n.from,r+1);if(n.type==de)for(let r=0;r<t;r++){let t=e.parts[r];t instanceof pe&&t.type==de&&(t.side=0)}return i.to}}return-1}};function ke(e,t,r,n,s){let{text:i}=e,o=e.char(s),a=s;if(t.unshift(le(C.LinkMark,n,n+(r==C.Image?2:1))),t.push(le(C.LinkMark,s-1,s)),40==o){let r,n=e.skipSpace(s+1),o=xe(i,n-e.offset,e.offset);o&&(n=e.skipSpace(o.to),r=be(i,n-e.offset,e.offset),r&&(n=e.skipSpace(r.to))),41==e.char(n)&&(t.push(le(C.LinkMark,s,s+1)),a=n+1,o&&t.push(o),r&&t.push(r),t.push(le(C.LinkMark,n,a)))}else if(91==o){let r=Le(i,s-e.offset,e.offset,!1);r&&(t.push(r),a=r.to)}return le(r,n,a,t)}function xe(e,t,r){if(60==e.charCodeAt(t)){for(let n=t+1;n<e.length;n++){let s=e.charCodeAt(n);if(62==s)return le(C.URL,t+r,n+1+r);if(60==s||10==s)return!1}return null}{let n=0,s=t;for(let t=!1;s<e.length;s++){let r=e.charCodeAt(s);if(I(r))break;if(t)t=!1;else if(40==r)n++;else if(41==r){if(!n)break;n--}else 92==r&&(t=!0)}return s>t?le(C.URL,t+r,s+r):s==e.length&&null}}function be(e,t,r){let n=e.charCodeAt(t);if(39!=n&&34!=n&&40!=n)return!1;let s=40==n?41:n;for(let n=t+1,i=!1;n<e.length;n++){let o=e.charCodeAt(n);if(i)i=!1;else{if(o==s)return le(C.LinkTitle,t+r,n+1+r);92==o&&(i=!0)}}return null}function Le(e,t,r,n){for(let s=!1,i=t+1,o=Math.min(e.length,i+999);i<o;i++){let o=e.charCodeAt(i);if(s)s=!1;else{if(93==o)return!n&&le(C.LinkLabel,t+r,i+1+r);if(n&&!I(o)&&(n=!1),91==o)return!1;92==o&&(s=!0)}}return null}class Se{constructor(e,t,r){this.parser=e,this.text=t,this.offset=r,this.parts=[]}char(e){return e>=this.end?-1:this.text.charCodeAt(e-this.offset)}get end(){return this.offset+this.text.length}slice(e,t){return this.text.slice(e-this.offset,t-this.offset)}append(e){return this.parts.push(e),e.to}addDelimiter(e,t,r,n,s){return this.append(new pe(e,t,r,(n?1:0)|(s?2:0)))}addElement(e){return this.append(e)}resolveMarkers(e){for(let t=e;t<this.parts.length;t++){let r=this.parts[t];if(!(r instanceof pe&&r.type.resolve&&2&r.side))continue;let n,s=r.type==he||r.type==fe,i=r.to-r.from,o=t-1;for(;o>=e;o--){let e=this.parts[o];if(e instanceof pe&&1&e.side&&e.type==r.type&&!(s&&(1&r.side||2&e.side)&&(e.to-e.from+i)%3==0&&((e.to-e.from)%3||i%3))){n=e;break}}if(!n)continue;let a=r.type.resolve,l=[],h=n.from,f=r.to;if(s){let e=Math.min(2,n.to-n.from,i);h=n.to-e,f=r.from+e,a=1==e?"Emphasis":"StrongEmphasis"}n.type.mark&&l.push(this.elt(n.type.mark,h,n.to));for(let e=o+1;e<t;e++)this.parts[e]instanceof oe&&l.push(this.parts[e]),this.parts[e]=null;r.type.mark&&l.push(this.elt(r.type.mark,r.from,f));let d=this.elt(a,h,f,l);this.parts[o]=s&&n.from!=h?new pe(n.type,n.from,h,n.side):null,(this.parts[t]=s&&r.to!=f?new pe(r.type,f,r.to,r.side):null)?this.parts.splice(t,0,d):this.parts[t]=d}let t=[];for(let r=e;r<this.parts.length;r++){let e=this.parts[r];e instanceof oe&&t.push(e)}return t}findOpeningDelimiter(e){for(let t=this.parts.length-1;t>=0;t--){let r=this.parts[t];if(r instanceof pe&&r.type==e)return t}return null}takeContent(e){let t=this.resolveMarkers(e);return this.parts.length=e,t}skipSpace(e){return B(this.text,e-this.offset)+this.offset}elt(e,t,r,n){return"string"==typeof e?le(this.parser.getNodeType(e),t,r,n):new ae(e,t)}}function Ce(e,t){if(!t.length)return e;if(!e.length)return t;let r=e.slice(),n=0;for(let e of t){for(;n<r.length&&r[n].to<e.to;)n++;if(n<r.length&&r[n].from<e.from){let t=r[n];t instanceof oe&&(r[n]=new oe(t.type,t.from,t.to,Ce(t.children,[e])))}else r.splice(n++,0,e)}return r}const we=[C.CodeBlock,C.ListItem,C.OrderedList,C.BulletList];class Ae{constructor(e,t){this.fragments=e,this.input=t,this.i=0,this.fragment=null,this.fragmentEnd=-1,this.cursor=null,e.length&&(this.fragment=e[this.i++])}nextFragment(){this.fragment=this.i<this.fragments.length?this.fragments[this.i++]:null,this.cursor=null,this.fragmentEnd=-1}moveTo(e,t){for(;this.fragment&&this.fragment.to<=e;)this.nextFragment();if(!this.fragment||this.fragment.from>(e?e-1:0))return!1;if(this.fragmentEnd<0){let e=this.fragment.to;for(;e>0&&"\n"!=this.input.read(e-1,e);)e--;this.fragmentEnd=e?e-1:0}let r=this.cursor;r||(r=this.cursor=this.fragment.tree.cursor(),r.firstChild());let n=e+this.fragment.offset;for(;r.to<=n;)if(!r.parent())return!1;for(;;){if(r.from>=n)return this.fragment.from<=t;if(!r.childAfter(n))return!1}}matches(e){let r=this.cursor.tree;return r&&r.prop(t.contextHash)==e}takeNodes(e){let t=this.cursor,r=this.fragment.offset,n=this.fragmentEnd-(this.fragment.openEnd?1:0),s=e.absoluteLineStart,i=s,o=e.block.children.length,a=i,l=o;for(;;){if(t.to-r>n){if(t.type.isAnonymous&&t.firstChild())continue;break}if(e.dontInject.add(t.tree),e.addNode(t.tree,t.from-r),t.type.is("Block")&&(we.indexOf(t.type.id)<0?(i=t.to-r,o=e.block.children.length):(i=a,o=l,a=t.to-r,l=e.block.children.length)),!t.nextSibling())break}for(;e.block.children.length>o;)e.block.children.pop(),e.block.positions.pop();return i-s}}const ye=new Y(new r(ne),Object.keys(Q).map((e=>Q[e])),Object.keys(Q).map((e=>G[e])),Object.keys(Q),K,T,Object.keys(ge).map((e=>ge[e])),Object.keys(ge),[]);function Te(e,t,r){let n=[];for(let s=e.firstChild,i=t;;s=s.nextSibling){let e=s?s.from:r;if(e>i&&n.push({from:i,to:e}),!s)break;i=s.to}return n}const Ie={resolve:"Strikethrough",mark:"StrikethroughMark"},Be={defineNodes:["Strikethrough","StrikethroughMark"],parseInline:[{name:"Strikethrough",parse:(e,t,r)=>126!=t||126!=e.char(r+1)?-1:e.addDelimiter(Ie,r,r+2,!0,!0),after:"Emphasis"}]};function Ee(e,t,r=0,n,s=0){let i=0,o=!0,a=-1,l=-1,h=!1,f=()=>{n.push(e.elt("TableCell",s+a,s+l,e.parser.parseInline(t.slice(a,l),s+a)))};for(let d=r;d<t.length;d++){let r=t.charCodeAt(d);124!=r||h?(h||32!=r&&9!=r)&&(a<0&&(a=d),l=d+1):((!o||a>-1)&&i++,o=!1,n&&(a>-1&&f(),n.push(e.elt("TableDelimiter",d+s,d+s+1))),a=l=-1),h=!h&&92==r}return a>-1&&(i++,n&&f()),i}class Me{constructor(){this.rows=null}nextLine(e,t,r){if(null==this.rows){let n;if(this.rows=!1,(45==t.next||58==t.next||124==t.next)&&/^\|?(\s*:?-+:?\s*\|)+(\s*:?-+:?\s*)?$/.test(n=t.text.slice(t.pos))){let s=[];Ee(e,r.content,0,s,r.start)==Ee(e,n,t.pos)&&(this.rows=[e.elt("TableHeader",r.start,r.start+r.content.length,s),e.elt("TableDelimiter",e.lineStart+t.pos,e.lineStart+t.text.length)])}}else if(this.rows){let r=[];Ee(e,t.text,t.pos,r,e.lineStart),this.rows.push(e.elt("TableRow",e.lineStart+t.pos,e.lineStart+t.text.length,r))}return!1}finish(e,t){return!!this.rows&&(this.emit(e,t),!0)}emit(e,t){e.addLeafElement(t,e.elt("Table",t.start,t.start+t.content.length,this.rows))}}const He={defineNodes:[{name:"Table",block:!0},"TableHeader","TableRow","TableCell","TableDelimiter"],parseBlock:[{name:"Table",leaf:(e,t)=>function(e,t){for(let r=t;r<e.length;r++){let t=e.charCodeAt(r);if(124==t)return!0;92==t&&r++}return!1}(t.content,0)?new Me:null,before:"SetextHeading"}]};class ve{nextLine(){return!1}finish(e,t){return e.addLeafElement(t,e.elt("Task",t.start,t.start+t.content.length,[e.elt("TaskMarker",t.start,t.start+3),...e.parser.parseInline(t.content.slice(3),t.start+3)])),!0}}const Pe=[He,{defineNodes:[{name:"Task",block:!0},"TaskMarker"],parseBlock:[{name:"TaskList",leaf:(e,t)=>/^\[[ xX]\]/.test(t.content)&&"ListItem"==e.parser.nodeSet.types[e.block.type].name?new ve:null,after:"SetextHeading"}]},Be];function Ne(e,t,r){return(n,s,i)=>{if(s!=e||n.char(i+1)==e)return-1;let o=[n.elt(r,i,i+1)];for(let s=i+1;s<n.end;s++){let a=n.char(s);if(a==e)return n.addElement(n.elt(t,i,s+1,o.concat(n.elt(r,s,s+1))));if(92==a&&o.push(n.elt("Escape",s,2+s++)),I(a))break}return-1}}const Oe={defineNodes:["Superscript","SuperscriptMark"],parseInline:[{name:"Superscript",parse:Ne(94,"Superscript","SuperscriptMark")}]},Re={defineNodes:["Subscript","SubscriptMark"],parseInline:[{name:"Subscript",parse:Ne(126,"Subscript","SubscriptMark")}]},Xe={defineNodes:["Emoji"],parseInline:[{name:"Emoji",parse(e,t,r){let n;return 58==t&&(n=/^[a-zA-Z_0-9]+:/.exec(e.slice(r+1,e.end)))?e.addElement(e.elt("Emoji",r,r+1+n[0].length)):-1}}]},ze=k({block:{open:"\x3c!--",close:"--\x3e"}}),De=ye.configure({props:[o({"Blockquote/...":a.quote,HorizontalRule:a.contentSeparator,"ATXHeading1/... SetextHeading1/...":a.heading1,"ATXHeading2/... SetextHeading2/...":a.heading2,"ATXHeading3/...":a.heading3,"ATXHeading4/...":a.heading4,"ATXHeading5/...":a.heading5,"ATXHeading6/...":a.heading6,"Comment CommentBlock":a.comment,Escape:a.escape,Entity:a.character,"Emphasis/...":a.emphasis,"StrongEmphasis/...":a.strong,"Link/... Image/...":a.link,"OrderedList/... BulletList/...":a.list,"BlockQuote/...":a.quote,"InlineCode CodeText":a.monospace,URL:a.url,"HeaderMark HardBreak QuoteMark ListMark LinkMark EmphasisMark CodeMark":a.processingInstruction,"CodeInfo LinkLabel":a.labelName,LinkTitle:a.string,Paragraph:a.content}),l.add((e=>{if(e.is("Block")&&!e.is("Document"))return(e,t)=>({from:t.doc.lineAt(e.from).to,to:e.to})})),h.add({Document:()=>null}),f.add({Document:ze})]});function je(e){return new d(ze,e,e.nodeSet.types.find((e=>"Document"==e.name)))}const qe=je(De),$e=je(De.configure([Pe,Re,Oe,Xe,{props:[o({"TableDelimiter SubscriptMark SuperscriptMark StrikethroughMark":a.processingInstruction,"TableHeader/...":a.heading,"Strikethrough/...":a.strikethrough,TaskMarker:a.atom,Task:a.list,Emoji:a.character,"Subscript Superscript":a.special(a.content),TableCell:a.content})]}]));function Fe(e,t){return t.sliceString(e.from,e.from+50)}class Ue{constructor(e,t,r,n,s,i,o){this.node=e,this.from=t,this.to=r,this.spaceBefore=n,this.spaceAfter=s,this.type=i,this.item=o}blank(e=!0){let t=this.spaceBefore;if("Blockquote"==this.node.name)t+=">";else for(let e=this.to-this.from-t.length-this.spaceAfter.length;e>0;e--)t+=" ";return t+(e?this.spaceAfter:"")}marker(e,t){let r="OrderedList"==this.node.name?String(+Ze(this.item,e)[2]+t):"";return this.spaceBefore+r+this.type+this.spaceAfter}}function Qe(e,t,r){let n=[];for(let t=e;t&&"Document"!=t.name;t=t.parent)"ListItem"!=t.name&&"Blockquote"!=t.name||n.push(t);let s=[],i=0;for(let e=n.length-1;e>=0;e--){let o,a=n[e],l=i;if("Blockquote"==a.name&&(o=/^[ \t]*>( ?)/.exec(t.slice(i))))i+=o[0].length,s.push(new Ue(a,l,i,"",o[1],">",null));else if("ListItem"==a.name&&"OrderedList"==a.parent.name&&(o=/^([ \t]*)\d+([.)])([ \t]*)/.exec(Fe(a,r)))){let e=o[3],t=o[0].length;e.length>=4&&(e=e.slice(0,e.length-4),t-=4),i+=t,s.push(new Ue(a.parent,l,i,o[1],e,o[2],a))}else if("ListItem"==a.name&&"BulletList"==a.parent.name&&(o=/^([ \t]*)([-+*])([ \t]+)/.exec(Fe(a,r)))){let e=o[3],t=o[0].length;e.length>4&&(e=e.slice(0,e.length-4),t-=4),i+=t,s.push(new Ue(a.parent,l,i,o[1],e,o[2],a))}}return s}function Ze(e,t){return/^(\s*)(\d+)(?=[.)])/.exec(t.sliceString(e.from,e.from+10))}function _e(e,t,r,n=0){for(let s=-1,i=e;;){if("ListItem"==i.name){let e=Ze(i,t),o=+e[2];if(s>=0){if(o!=s+1)return;r.push({from:i.from+e[1].length,to:i.from+e[0].length,insert:String(s+2+n)})}s=o}let e=i.nextSibling;if(!e)break;i=e}}const Ve=({state:e,dispatch:t})=>{let r=c(e),{doc:n}=e,s=null,i=e.changeByRange((t=>{if(!t.empty||!$e.isActiveAt(e,t.from))return s={range:t};let i=t.from,o=n.lineAt(i),a=Qe(r.resolveInner(i,-1),o.text,n);for(;a.length&&a[a.length-1].from>i-o.from;)a.pop();if(!a.length)return s={range:t};let l=a[a.length-1];if(l.to-l.spaceAfter.length>i-o.from)return s={range:t};let h=i>=l.to-l.spaceAfter.length&&!/\S/.test(o.text.slice(l.to));if(l.item&&h){if(l.node.firstChild.to>=i||o.from>0&&!/[^\s>]/.test(n.lineAt(o.from-1).text)){let e,t=a.length>1?a[a.length-2]:null,r="";t&&t.item?(e=o.from+t.from,r=t.marker(n,1)):e=o.from+(t?t.to:0);let s=[{from:e,to:i,insert:r}];return"OrderedList"==l.node.name&&_e(l.item,n,s,-2),t&&"OrderedList"==t.node.name&&_e(t.item,n,s),{range:p.cursor(e+r.length),changes:s}}{let t="";for(let e=0,r=a.length-2;e<=r;e++)t+=a[e].blank(e<r);return t+=e.lineBreak,{range:p.cursor(i+t.length),changes:{from:o.from,insert:t}}}}if("Blockquote"==l.node.name&&h&&o.from){let r=n.lineAt(o.from-1),s=/>\s*$/.exec(r.text);if(s&&s.index==l.from){let n=e.changes([{from:r.from+s.index,to:r.to},{from:o.from+l.from,to:o.to}]);return{range:t.map(n),changes:n}}}let f=[];"OrderedList"==l.node.name&&_e(l.item,n,f);let d=e.lineBreak,c=l.item&&l.item.from<o.from;if(!c||/^[\s\d.)\-+*>]*/.exec(o.text)[0].length>=l.to)for(let e=0,t=a.length-1;e<=t;e++)d+=e!=t||c?a[e].blank():a[e].marker(n,1);let u=i;for(;u>o.from&&/\s/.test(o.text.charAt(u-o.from-1));)u--;return f.push({from:u,to:i,insert:d}),{range:p.cursor(u+d.length),changes:f}}));return!s&&(t(e.update(i,{scrollIntoView:!0,userEvent:"input"})),!0)};function Ge(e){return"QuoteMark"==e.name||"ListMark"==e.name}const Ke=({state:e,dispatch:t})=>{let r=c(e),n=null,s=e.changeByRange((t=>{let s=t.from,{doc:i}=e;if(t.empty&&$e.isActiveAt(e,t.from)){let e=i.lineAt(s),n=Qe(function(e,t){let r,n=e.resolveInner(t,-1),s=t;for(Ge(n)&&(s=n.from,n=n.parent);r=n.childBefore(s);)if(Ge(r))s=r.from;else{if("OrderedList"!=r.name&&"BulletList"!=r.name)break;n=r.lastChild,s=n.to}return n}(r,s),e.text,i);if(n.length){let r=n[n.length-1],i=r.to-r.spaceAfter.length+(r.spaceAfter?1:0);if(s-e.from>i&&!/\S/.test(e.text.slice(i,s-e.from)))return{range:p.cursor(e.from+i),changes:{from:e.from+i,to:s}};if(s-e.from==i){let n=e.from+r.from;if(r.item&&r.node.from<r.item.from&&/\S/.test(e.text.slice(r.from,r.to)))return{range:t,changes:{from:n,to:e.from+r.to,insert:r.blank()}};if(n<s)return{range:p.cursor(n),changes:{from:n,to:s}}}}}return n={range:t}}));return!n&&(t(e.update(s,{scrollIntoView:!0,userEvent:"delete"})),!0)},Je=[{key:"Enter",run:Ve},{key:"Backspace",run:Ke}],We=x({matchClosingTags:!1});function Ye(e={}){let{codeLanguages:t,defaultCodeLanguage:r,addKeymap:n=!0,base:{parser:s}=qe}=e;if(!(s instanceof Y))throw new RangeError("Base parser provided to `markdown` should be a Markdown parser");let o,a=e.extensions?[e.extensions]:[],l=[We.support];r instanceof u?(l.push(r.support),o=r.language):r&&(o=r);let h=t||o?(f=t||[],d=o,e=>{let t=e&&b.matchLanguageName(f,e,!0);return t?t.support?t.support.language.parser:L.getSkippingParser(t.load()):d?d.parser:null}):void 0;var f,d;return a.push(function(e){let{codeParser:t,htmlParser:r}=e,n=i(((e,n)=>{let s=e.type.id;if(!t||s!=C.CodeBlock&&s!=C.FencedCode){if(r&&(s==C.HTMLBlock||s==C.HTMLTag))return{parser:r,overlay:Te(e.node,e.from,e.to)}}else{let r="";if(s==C.FencedCode){let t=e.node.getChild(C.CodeInfo);t&&(r=n.read(t.from,t.to))}let i=t(r);if(i)return{parser:i,overlay:e=>e.type.id==C.CodeText}}return null}));return{wrap:n}}({codeParser:h,htmlParser:We.language.parser})),n&&l.push(m.high(g.of(Je))),new u(je(s.configure(a)),l)}export{qe as commonmarkLanguage,Ke as deleteMarkupBackward,Ve as insertNewlineContinueMarkup,Ye as markdown,Je as markdownKeymap,$e as markdownLanguage};
