---
title: 'Five GlideRecord one-liners I use every week'
description: 'Small GlideRecord patterns that save time in background scripts and fix scripts.'
pubDate: 2026-07-12
lang: 'en'
tags: ['scripting', 'gliderecord']
---

A few small `GlideRecord` patterns I keep reaching for in background scripts.
None of them are revolutionary, but together they save me a surprising amount
of time.

## 1. Count without looping

```javascript
var ga = new GlideAggregate('incident');
ga.addQuery('active', true);
ga.addAggregate('COUNT');
ga.query();
ga.next();
gs.info(ga.getAggregate('COUNT'));
```

`GlideAggregate` pushes the counting to the database instead of pulling every
row into memory.

## 2. Encoded query straight from a list view

Build the filter in a list, right-click the breadcrumb, **Copy query**, and
paste it:

```javascript
var gr = new GlideRecord('incident');
gr.addEncodedQuery('active=true^priority=1^assignment_group.nameSTARTSWITHnetwork');
gr.query();
```

Much faster than chaining `addQuery` calls, and you can verify the filter
visually before committing to it.

## 3. Get a single record by sys_id

```javascript
var gr = new GlideRecord('incident');
if (gr.get('9d385017c611228701d22104cc95c371')) {
  gs.info(gr.getValue('short_description'));
}
```

`get()` queries and advances to the first row in one call — no `query()` +
`next()` dance.

## 4. Update in bulk, carefully

```javascript
var gr = new GlideRecord('incident');
gr.addEncodedQuery('active=true^stateIN1,2');
gr.query();
gr.setValue('assignment_group', groupSysId);
gr.updateMultiple();
```

`updateMultiple()` skips loading each record, but remember it still runs
business rules unless you pair it with `setWorkflow(false)` — decide
deliberately, never by default.

## 5. Dot-walk read, getValue write

Reading through a reference is fine (`gr.caller_id.company.name`), but when
you need the raw value — for comparisons, logs or integrations — prefer
`getValue()`:

```javascript
var state = gr.getValue('state'); // "2", a plain string
```

It avoids the classic bug where a `GlideElement` object looks like a string
until a strict comparison ruins your afternoon.
