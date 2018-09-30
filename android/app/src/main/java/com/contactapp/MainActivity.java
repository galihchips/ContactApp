package com.contactapp;

import com.facebook.react.ReactActivity;
import com.imagepicker.permissions.OnImagePickerPermissionsCallback; // <- add this import
import com.facebook.react.modules.core.PermissionListener; // <- add this import
public class MainActivity extends ReactActivity {

    @Override
    protected String getMainComponentName() {
        return "ContactApp";
    }
}
