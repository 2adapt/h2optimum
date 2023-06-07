{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = with pkgs; [
    nodejs-18_x

    # install gdal cli tools such as ogr2ogr, etc
    #(pkgs.python3.withPackages(p: [p.numpy p.gdal]))
    
    #mapserver
    #curl
    #wget
  ];

  #shellHook = ''
    # Mark variables which are modified or created for export.
    #set -a
    #source ${toString ../env.sh}
    #set +a
    #alias npm="echo npm is not available in this shell. Use pnpm instead."

  #'';

}
